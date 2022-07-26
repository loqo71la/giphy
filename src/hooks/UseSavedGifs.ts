import { useState } from 'react';
import { Gif } from '../shared/models/Gif';

export function useSavedGifs(): [Gif[], (gifs: Gif[]) => void] {
  const [gifs, setGifts] = useState<Gif[]>(() => {
    try {
      const gifs = window.localStorage.getItem('gifs');
      return gifs ? JSON.parse(gifs) : [];
    } catch (error) {
      console.log(error);
      return [];
    }
  });

  const saveGift = (gifs: Gif[]) => {
    try {
      setGifts(gifs);
      window.localStorage.setItem('gifs', JSON.stringify(gifs));
    } catch (error) {
      console.error(error);
    }
  }

  return [gifs, saveGift];
}
