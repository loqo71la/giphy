import { Link } from 'react-router-dom';

import InputGroup from './InputGroup';

export default function Navbar(props: { onSearch: () => void }) {
  return (
    <nav className="navbar navbar-center">
      <InputGroup />
      <button className="btn-rounded" onClick={props.onSearch}>Search for GIF</button>
      <Link to="/my-saved-gifs">My Saved Gifs</Link>
    </nav>
  )
}
