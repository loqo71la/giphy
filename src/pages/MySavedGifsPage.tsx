import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../App.config';
import { Gif } from '../shared/models/Gif';
import { useSavedGifs } from '../hooks/UseSavedGifs';

import GifCard from '../components/GifCard';
import TrashIcon from '../components/icons/TrashIcon';
import Pagination from '../components/Pagination';

export default function MySavedGifsPage() {
  const [savedGifs, setSavedGifs] = useSavedGifs();
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  const gifs = savedGifs.slice(offset, offset + api.size);
  const pageable = {
    totalCount: savedGifs.length,
    count: gifs.length,
    offset
  }

  const onSelect = (gif: Gif) => {
    const isDeleted = window.confirm(`Are you sure you want to delete this GIF`);
    if (isDeleted) setSavedGifs(savedGifs.filter(current => current.id !== gif.id));
  };

  return (
    <>
      <nav className="navbar navbar-justify">
        <button className="btn-rounded" onClick={() => navigate(-1)}>Go Back</button>
        <h2>My Saved GIFS</h2>
        <span />
      </nav>
      <Pagination pageable={pageable} onSelect={offset => setOffset(offset)} />
      <section>
        <ul className="gif-container">
          {gifs.map((gif, index) => (
            <li key={index}>
              <GifCard gif={gif} />
              <button onClick={() => onSelect(gif)}>
                <TrashIcon />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
