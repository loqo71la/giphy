import { ChangeEvent, useState } from 'react';

import './Navbar.scss';

export default function Navbar(props: any) {
  const [query, setQuery] = useState('');
  const handleQuery = (event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value);

  return (
    <nav className="navbar">
      <div>
        <svg aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" value={query} onChange={handleQuery} />
      </div>
      <button onClick={() => props.onSearch(query)}>Search for GIF</button>
    </nav>
  )
}
