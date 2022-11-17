import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Battle from './pages/Battle';
import Header from './components/Header';
import Spinner from './components/Spinner';
import './index.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='container>'>
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='battle' element={<Battle />} />
          <Route path='popular' element={<Popular />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
