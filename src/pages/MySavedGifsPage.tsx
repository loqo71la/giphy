import { useNavigate } from 'react-router-dom';

import { UseSavedGifs } from '../hooks/UseSavedGifs';
import { Gif } from '../shared/models/Gif';

import GifCard from '../components/GifCard';
import TrashIcon from '../components/icons/TrashIcon';

export default function MySavedGifsPage() {
  const [savedGifs, setSavedGifs] = UseSavedGifs();
  const navigate = useNavigate();

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
      <section>
        <ul className="gif-container">
          {savedGifs.map((gif, index) => (
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
