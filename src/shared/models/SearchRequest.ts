import { Item } from './Item';
import { Pageable } from './Pageable';

export interface SearchRequest {
  items?: Item[];
  loading: boolean;
  pageable?: Pageable;
}
