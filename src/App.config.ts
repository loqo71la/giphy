import GithubIcon from './components/icons/GithubIcon';
import HackerrankIcon from './components/icons/HackrankIcon';
import TelegramIcon from './components/icons/TelegramIcon';

export const api = {
  searchUrl: `${process.env.REACT_APP_API_URL}/search?api_key=${process.env.REACT_APP_API_KEY}`,
  trendingUrl: `${process.env.REACT_APP_API_URL}/trending?api_key=${process.env.REACT_APP_API_KEY}`,
  error: 'The server encountered an internal error and was unable to complete your request.',
  limit: 25
};

export const socialLinks = [
  { link: 'https://t.me/loqo71la', icon: TelegramIcon },
  { link: 'https://github.com/loqo71la', icon: GithubIcon },
  { link: 'https://www.hackerrank.com/loqo71la', icon: HackerrankIcon },
];

export const sizes = [420, 640, 860, 1080, 1280];
