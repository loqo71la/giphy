import { useEffect, useState } from 'react';

import { sizes } from '../App.config';
import { Item } from '../shared/models/Item';

export function useGridCols(items: Item[]) {
  const [cols, setCols] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const newCols = getCols();
      if (newCols !== cols) setCols(newCols);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [cols]);

  return [splitCols(items, cols)];
}

function getCols(): number {
  const index = sizes.findIndex(size => size >= window.innerWidth);
  return index === -1 ? sizes.length + 1 : index + 1;
}

function splitCols(items: Item[], cols: number): Item[][] {
  if (cols === 0) return [];

  let col = 0;
  const result: Item[][] = [...Array(cols)].map(_ => []);
  items.forEach(item => {
    result[col++].push(item);
    if (col === result.length) col = 0;
  });
  return result;
}
