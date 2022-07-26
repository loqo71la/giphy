import { useState } from 'react';

import { api } from '../App.config';
import { Gif } from '../shared/models/Gif';
import { useSavedGifs } from '../hooks/UseSavedGifs';
import { SearchRequest } from '../shared/models/SearchRequest';
import { toSearch } from '../shared/utils/MapperUtil';

import Loader from '../components/Loader';
import HeartIcon from '../components/icons/Heartcon';
import GifCard from '../components/GifCard';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Pagination from '../components/Pagination';

export default function SearchPage() {
  const [search, setSearch] = useState<SearchRequest>({ loading: false });
  const query = useSelector((task: RootState) => task.query);
  const [gifs, setGifs] = useSavedGifs();


  const onSelect = (gif: Gif) => {
    const current = gifs.find(({ id }) => id === gif.id);
    if (current) return;

    setGifs([...gifs, gif]);
    window.alert('The Gif was successfully saved')
  };

  const onSearch = async (offset: number = 0) => {
    setSearch({ ...search, loading: true });
    const response = await fetch(`${api.searchUrl}&q=${query.value}&offset=${offset}`);
    const data = await response.json();
    setSearch(toSearch(data));
  };

  return (
    <>
      <Navbar onSearch={onSearch} />
      {search.pageable && <Pagination pageable={search.pageable} onSelect={offset => onSearch(offset)}/>}
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
