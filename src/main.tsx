import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import MySavedGifsPage from './pages/MySavedGifsPage';
import SearchPage from './pages/SearchPage';
import { store } from './store';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/search" />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/my-saved-gifs" element={<MySavedGifsPage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
