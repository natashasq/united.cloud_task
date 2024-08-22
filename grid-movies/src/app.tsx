import React from 'react';
import { Route, Routes } from 'react-router-dom';
//Components
import Home from './pages/Home';
import Layout from './components/layout/Layout';

import "./styles.css"

function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/favorites' element={<div>favorites</div>} />
      </Routes>
      </Layout>
    </div>
  );
}

export default App;
