import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import "../styles.css"

function App() {
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/favorites" element={<div>Favorites</div>} />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
