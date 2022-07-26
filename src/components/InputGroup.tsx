import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../store';
import { setQuery } from '../store/querySlice';
import SearchIcon from './icons/SearchIcon';

export default function InputGroup() {
  const { value } = useSelector((task: RootState) => task.query);
  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(event.target.value));
  };

  return (
    <div className="input-group">
      <SearchIcon />
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
