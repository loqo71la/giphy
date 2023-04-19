# Giphy
[![codecov](
https://img.shields.io/badge/Giphy-4E69C8?labelColor=4E69C8&amp;logo=Firefox&amp;)](https://giphy.loqo71la.dev/)
[![docker](https://img.shields.io/docker/v/loqo71la/giphy)](https://hub.docker.com/r/loqo71la/giphy)

It is a web client application built using [React](https://reactjs.org/), designed to consume and display GIFs from the [GIPHY](https://giphy.com/) API. It also includes a feature that allows users to save their favorite GIFs

# For Development
## Prerequisites
- [Nodejs](https://nodejs.org/en/download)

## Install packages
> npm install

## Environment variables
Creates the `.env.local` file in the root directory with the following variables:
```
VITE_API_URL=https://api.giphy.com/v1/gifs
VITE_API_KEY=*** Your API Key ***
```
## Run the app in the development mode
> npm run dev

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
