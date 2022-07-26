import { Gif } from '../shared/models/Gif';

export default function GifCard(props: { gif: Gif }) {
  return (
    <section className="gif-card">
      <img src={props.gif.image} alt="giphy" />
      {props.gif.name && <h2>{props.gif.name}</h2>}
      {props.gif.username && <p>@{props.gif.username}</p>}
    </section>
  );
}
