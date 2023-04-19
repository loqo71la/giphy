import { Docker, GitHub, HackerRank, Java, Npm } from "@loqo71la/react-web-icons";

export const api = {
  searchUrl: `${import.meta.env.VITE_API_URL}/search?api_key=${import.meta.env.VITE_API_KEY}`,
  trendingUrl: `${import.meta.env.VITE_API_URL}/trending?api_key=${import.meta.env.VITE_API_KEY}`,
  error: 'The server encountered an internal error and was unable to complete your request.',
  limit: 25
};

export const socialLinks = [
  { link: 'https://github.com/loqo71la', icon: GitHub, title: 'GitHub' },
  { link: 'https://central.sonatype.com/namespace/dev.loqo71la', icon: Java, title: 'Maven Central' },
  { link: 'https://hub.docker.com/u/loqo71la', icon: Docker, title: 'DockerHub' },
  { link: 'https://www.npmjs.com/~loqo71la', icon: Npm, title: 'npm' },
  { link: 'https://www.hackerrank.com/loqo71la', icon: HackerRank, title: 'HackerRank' }
];

export const sizes = [420, 640, 860, 1080, 1280];
