import { useState } from 'react';

import { api } from '../App.config';
import { Gif } from '../shared/models/Search';
import Navbar from '../components/Navbar';

import './SearchPage.scss';

type Search = { gifs?: Gif[], loading: boolean };

export default function SearchPage() {
  const [search, setSeach] = useState<Search>({ loading: false });

  const onSearch = async (query: string, offset: number = 0) => {
    setSeach({ ...search, loading: true });
    const response = await fetch(`${api.searchUrl}&q=${query}&offset=${offset}`);
    const { data } = await response.json();
    setSeach({
      gifs: data.map((item: any) => ({ name: item.title, image: item.images.fixed_height.url, username: item.username })),
      loading: false
    })
  }

  return (
    <>
      <Navbar onSearch={onSearch} />
      <section className="search">
        {search.loading &&
          <div>Loading...</div>
        }
        {search.gifs && !search.loading &&
          <ul>
            {search.gifs.map((gif, index) => (
              <li key={index}>
                <img src={gif.image} alt={`giphy-${index}`} />
                {gif.name && <h2>{gif.name}</h2>}
                {gif.username && <p>@{gif.username}</p>}
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  );
}
