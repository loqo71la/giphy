import { useGridCols } from '../hooks/UseGridCols';
import { Item } from '../shared/models/Item';

import Card from './Card';
import style from './Grid.module.scss';

export default function Grid(props: {items: Item[], icon: JSX.Element, onSelect: (item: Item) => void}) {
  const [cols] = useGridCols(props.items);

  return (
    <section className={style.container}>
      {cols.map((col, index) =>
        <ul key={index}>
          {col.map((item, index) => (
            <Card key={index} item={item} icon={props.icon} onSelect={() => props.onSelect(item)} />)
          )}
        </ul>
      )}
    </section>
  );
}
