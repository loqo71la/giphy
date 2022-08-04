import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { api } from '../App.config';
import { Item } from '../shared/models/Item';
import { SearchRequest } from '../shared/models/SearchRequest';
import { toSearch } from '../shared/utils/MapperUtil';
import { RootState } from '../store';
import { useSavedGifs } from '../hooks/UseSavedGifs';

import Grid from '../components/Grid';
import HeartIcon from '../components/icons/Heartcon';
import Layout from '../components/theme/Layout';
import Loader from '../components/Loader';
import Navbar from '../components/theme/Navbar';
import Pagination from '../components/Pagination';

export default function SearchPage() {
  const [search, setSearch] = useState<SearchRequest>({ loading: true, title: 'Trending GIFs' });
  const query = useSelector((task: RootState) => task.query);
  const [gifs, setGifs] = useSavedGifs();

  const onSelect = (gif: Item) => {
    const current = gifs.find(({ id }) => id === gif.id);
    if (current) return;
    setGifs([...gifs, gif]);
    window.alert('The Gif was successfully saved')
  };

  const onSearch = async (offset: number = 0) => {
    setSearch({ ...search, loading: true });
    const baseUrl = query.value ? `${api.searchUrl}&q=${query.value}` : `${api.trendingUrl}&rating=g`;
    const response = await fetch(`${baseUrl}&limit=${api.limit}&offset=${offset}`);
    const data = await response.json();
    const title = query.value ? `"${query.value}" GIFs` : 'Trending GIFs';
    setSearch({ ...toSearch(data), title });
  };

  useEffect(() => { onSearch() }, []);

  return (
    <Layout navbar={<Navbar onSearch={onSearch} />}>
      {search.loading ?
        <Loader /> :
        <>
          <Pagination pageable={search.pageable!} title={search.title!} onSelect={offset => onSearch(offset)} />
          <Grid items={search.items!} icon={<HeartIcon />} onSelect={onSelect} />
        </>
      }
    </Layout>
  );
}
