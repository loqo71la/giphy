import { Link } from 'react-router-dom';

import InputGroup from '../InputGroup';
import style from './Navbar.module.scss';

export default function Navbar(props: { onSearch: () => void }) {
  return (
    <nav className={style.navbar}>
      <InputGroup />
      <button onClick={props.onSearch}>Search for GIF</button>
      <span>
        <Link to="/my-saved-gifs">My Saved Gifs</Link>
      </span>
    </nav>
  )
}
