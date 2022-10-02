import { Search } from '@loqo71la/react-web-icons';
import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { setQuery } from '../store/querySlice';

export default function InputGroup() {
  const { value } = useSelector((task: RootState) => task.query);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  return (
    <div className="input-group">
      <Search />
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
