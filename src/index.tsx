import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import SearchPage from './pages/SearchPage';
import MySavedGifsPage from './pages/MySavedGifsPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Navigate replace to="/search" />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/my-saved-gifs" element={<MySavedGifsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
