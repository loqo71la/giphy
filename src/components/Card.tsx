import { Item } from '../shared/models/Item';

import style from './Card.module.scss';

export default function Card(props: { item: Item, icon: JSX.Element, onSelect: () => void }) {
  const { url, width, height } = props.item.image;

  return (
    <li className={style.card}>
      <section>
        <img src={url} width={width} height={height} alt="giphy" loading="lazy" />
        {props.item.title && <h2>{props.item.title}</h2>}
        {props.item.username && <p>@{props.item.username}</p>}
      </section>
      <button onClick={props.onSelect}>
        {props.icon}
      </button>
    </li>
  );
}
