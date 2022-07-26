export function toSearch(data: any) {
  return ({
    gifs: data.data.map((item: any) => ({ id: item.id, name: item.title, image: item.images.fixed_height.url, username: item.username })),
    pagination: { totalCount: data.pagination.total_count, count: data.pagination.count, offset: data.pagination.offset },
    loading: false
  });
}
