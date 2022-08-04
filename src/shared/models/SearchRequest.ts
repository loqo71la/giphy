import { Item } from './Item';
import { Pageable } from './Pageable';

export interface SearchRequest {
  title?: string;
  items?: Item[];
  loading: boolean;
  pageable?: Pageable;
}
