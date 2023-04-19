# Giphy
[![codecov](
https://img.shields.io/badge/Giphy-4E69C8?labelColor=4E69C8&amp;logo=Firefox&amp;)](https://giphy.loqo71la.dev/)
[![docker](https://img.shields.io/docker/v/loqo71la/giphy)](https://hub.docker.com/r/loqo71la/giphy)

It is a web client application built using [React](https://reactjs.org/), designed to consume and display GIFs from the [Giphy](https://giphy.com/) API. It also includes a feature that allows users to save their favorite GIFs

## User Guide
### Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Application
To run the application, use one of the following methods:
#### Docker
```
docker run -d -p 5173:80 \
    -e API_KEY='**Your_Giphy_Key**' \
    -e API_URL='https://api.giphy.com/v1/gifs' \
    --name giphy loqo71la/giphy 
```
#### Docker Compose
Create a `docker-compose.yml` file with the following content:
```yml
version: "3.9"
services:
    giphy:
        container_name: giphy
        image: loqo71la/giphy
        environment:
            API_URL: https://api.giphy.com/v1/gifs
            API_KEY: **Your_Giphy_Key**
        ports:
            - 5173:80
```
Run the command:
```
docker-compose up -d
```
The application will be accessible at [http://localhost:5173](http://localhost:5173).

## Developer Guide
### Prerequisites
- [node 16+](https://nodejs.org/en/download)

### Install packages
```
npm install
```
### Environment variables
Create a `.env.local` file in the root directory with the following variables:
```
VITE_API_URL=https://api.giphy.com/v1/gifs
VITE_API_KEY=**Your_Giphy_Key**
```
### Running the application in development mode
```
npm run dev
```
The application will be accessible at [http://localhost:5173](http://localhost:5173).
