import { Gif } from './Gif';
import { Pageable } from './Pageable';

export interface SearchRequest {
  gifs?: Gif[],
  loading: boolean,
  pageable?: Pageable,
}
