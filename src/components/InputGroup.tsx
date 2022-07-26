import SearchIcon from './icons/SearchIcon';

export default function InputGroup(props: { value: string, onChange: (value: string) => void }) {
  return (
    <div className="input-group">
      <SearchIcon />
      <input type="text" value={props.value} onChange={e => props.onChange(e.target.value)} />
    </div>
  );
}
