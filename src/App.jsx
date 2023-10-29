import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Upload from './Pages/Upload';
import Join from './Pages/join';
import Login from './Pages/login';

function App() {
  return (
    <>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/upload' element={<Upload />} />
      <Route path='/login' element={<Login />} />
      <Route path='/join' element={<Join />} />
    </Routes>
    </>
  );
}

export default App;
