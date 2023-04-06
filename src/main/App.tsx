import React from 'react';
import './App.css';
import HomePage from '../home/homePage';
import Header from './header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieTable from '../movie/moviePage';
import Podcast from '../podcast/podcastPage';
import NotFoundPage from '../notfoundpage';

function App() {
  return (
    // Here I import all of the elements and set the routes for them so that my website works
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="movies" element={<MovieTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
