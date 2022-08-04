import { Item } from '../models/Item';
import { Image } from '../models/Image';
import { SearchRequest } from '../models/SearchRequest';
import { Pageable } from '../models/Pageable';

export function toSearch(data: any): SearchRequest {
  return ({
    items: toItems(data.data),
    pageable: toPageable(data),
    loading: false
  });
}

function toItems(data: any[]): Item[] {
  return data.map((item: any) => ({
    id: item.id,
    title: item.title,
    username: item.username,
    image: toImage(item)
  }));
}

function toImage(data: any): Image {
  return ({
    url: data.images.fixed_width.url,
    width: data.images.fixed_width.width,
    height: data.images.fixed_width.height
  });
}

function toPageable(data: any): Pageable {
  return ({
    totalCount: data.pagination.total_count,
    offset: data.pagination.offset,
    count: data.pagination.count
  });
}
