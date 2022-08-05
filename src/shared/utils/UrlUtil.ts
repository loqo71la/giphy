import { api } from '../../App.config';

export function loadTrendingUrl(offset: number = 0): string {
  return `${api.trendingUrl}&rating=g&limit=${api.limit}&offset=${offset}`;
}

export function loadSearchUrl(query: string, offset: number = 0): string {
  return `${api.searchUrl}&q=${query}&limit=${api.limit}&offset=${offset}`;
}