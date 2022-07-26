import { useState } from 'react';

import { api } from '../App.config';
import { Pagination } from '../shared/models/Pagination';
import { Gif } from '../shared/models/Gif';
import { UseSavedGifs } from '../hooks/UseSavedGifs';
import { toSearch } from '../shared/utils/MapperUtil';

import Loader from '../components/Loader';
import Navbar from '../components/Navbar';
import HeartIcon from '../components/icons/Heartcon';
import GifCard from '../components/GifCard';

type Search = { gifs?: Gif[], pagination?: Pagination, loading: boolean };

export default function SearchPage() {
  const [search, setSeach] = useState<Search>({ loading: false });
  const [gifs, setGifs] = UseSavedGifs();

  const onSelect = (gif: Gif) => {
    const current = gifs.find(({ id }) => id === gif.id);
    if (current) return;

    setGifs([...gifs, gif]);
    window.alert('The Gif was successfully saved')
  };

  const onSearch = async (query: string, offset: number = 0) => {
    setSeach({ ...search, loading: true });
    const response = await fetch(`${api.searchUrl}&q=${query}&offset=${offset}`);
    const data = await response.json();
    setSeach(toSearch(data));
  };

  return (
    <>
      <Navbar onSearch={onSearch} />
      <section>
        {search.loading ?
          <Loader /> :
          <ul className="gif-container">
            {search.gifs?.map((gif, index) => (
              <li key={index}>
                <GifCard gif={gif} />
                <button className="danger" onClick={() => onSelect(gif)}>
                  <HeartIcon />
                </button>
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  );
}
