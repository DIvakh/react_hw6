import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Battle from './pages/Battle';
import Results from './pages/Results';
import Header from './components/Header';

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
          <Route path='battle/results' element={<Results />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
