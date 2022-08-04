import { useState } from 'react';
import { Item } from '../shared/models/Item';

export function useSavedGifs(): [Item[], (gifs: Item[]) => void] {
  const [gifs, setGifts] = useState<Item[]>(() => {
    try {
      const gifs = window.localStorage.getItem('savedGifs');
      return gifs ? JSON.parse(gifs) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const saveGift = (gifs: Item[]) => {
    try {
      setGifts(gifs);
      window.localStorage.setItem('savedGifs', JSON.stringify(gifs));
    } catch (error) {
      console.error(error);
    }
  }

  return [gifs, saveGift];
}
