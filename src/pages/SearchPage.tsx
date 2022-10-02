import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Item } from '../shared/models/Item';
import { loadSearchUrl, loadTrendingUrl } from '../shared/utils/UrlUtil';
import { RootState } from '../store';
import { SearchRequest } from '../shared/models/SearchRequest';
import { toSearch } from '../shared/utils/MapperUtil';
import { useSavedGifs } from '../hooks/UseSavedGifs';

import Grid from '../components/Grid';
import Layout from '../components/theme/Layout';
import Loader from '../components/Loader';
import Navbar from '../components/theme/Navbar';
import Pagination from '../components/Pagination';
import { HeartFill } from '@loqo71la/react-web-icons';

export default function SearchPage() {
  const [req, setReq] = useState({ url: loadTrendingUrl(), title: 'Trending GIFs' });
  const [search, setSearch] = useState<SearchRequest>({ loading: true });
  const query = useSelector((task: RootState) => task.query);
  const [gifs, setGifs] = useSavedGifs();

  const onSelect = (gif: Item) => {
    const current = gifs.find(({ id }) => id === gif.id);
    if (current) return;
    setGifs([...gifs, gif]);
    window.alert('The Gif was successfully saved')
  };

  const onSearch = async (offset: number = 0) => {
    const url = query.value ? loadSearchUrl(query.value, offset): loadTrendingUrl(offset);
    const title = query.value ? `"${query.value}" GIFs` : 'Trending GIFs';
    setReq({ url, title });
  };

  useEffect(() => {
    const fetchGifs = async () => {
      setSearch({ loading: true });
      const response = await fetch(req.url);
      const data = await response.json();
      setSearch(toSearch(data));
    };
    fetchGifs();
  }, [req.url]);

  return (
    <Layout navbar={<Navbar onSearch={onSearch} />}>
      {search.loading ?
        <Loader /> :
        <>
          <Pagination pageable={search.pageable!} title={req.title} onSelect={offset => onSearch(offset)} />
          <Grid items={search.items!} icon={<HeartFill title="Save" />} onSelect={onSelect} />
        </>
      }
    </Layout>
  );
}
