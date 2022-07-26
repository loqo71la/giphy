import { useState } from 'react';
import { Link } from 'react-router-dom';

import InputGroup from './InputGroup';

export default function Navbar(props: { onSearch: (value: string) => void }) {
  const [query, setQuery] = useState('');
  const onChange = (value: string) => setQuery(value);

  return (
    <nav className="navbar navbar-center">
      <InputGroup value={query} onChange={onChange}></InputGroup>
      <button className="btn-rounded" onClick={() => props.onSearch(query)}>Search for GIF</button>
      <Link to="/my-saved-gifs">My Saved Gifs</Link>
    </nav>
  )
}
