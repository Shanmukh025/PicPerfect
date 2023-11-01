import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Join from './Pages/Join';
import Login from './Pages/Login';
import Upload from './Pages/Upload';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/login' element={<Login />} />
        <Route path='/join' element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
