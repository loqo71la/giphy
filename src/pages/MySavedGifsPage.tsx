import { useState } from 'react';

import { api } from '../App.config';
import { Item } from '../shared/models/Item';
import { useSavedGifs } from '../hooks/UseSavedGifs';

import Grid from '../components/Grid';
import Layout from '../components/theme/Layout';
import Pagination from '../components/Pagination';
import TrashIcon from '../components/icons/TrashIcon';
import SavedNavbar from '../components/theme/SavedNavbar';

export default function MySavedGifsPage() {
  const [savedGifs, setSavedGifs] = useSavedGifs();
  const [offset, setOffset] = useState<number>(0);
  
  const gifs = savedGifs.slice(offset, offset + api.limit);
  const pageable = {
    totalCount: savedGifs.length,
    count: gifs.length,
    offset
  }

  const onSelect = (gif: Item) => {
    const isDeleted = window.confirm(`Are you sure you want to delete this GIF`);
    if (isDeleted) setSavedGifs(savedGifs.filter(current => current.id !== gif.id));
  };

  return (
    <Layout navbar={<SavedNavbar />}>
      <>
        <Pagination pageable={pageable} title="Saved GIFs" onSelect={offset => setOffset(offset)} />
        <Grid items={gifs} icon={<TrashIcon />} onSelect={onSelect} />
      </>
    </Layout>
  );
}
