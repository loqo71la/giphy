import { Gif } from './Gif';

export interface ListAction {
  name: string;
  onSelect: (gif: Gif) => void;
}
