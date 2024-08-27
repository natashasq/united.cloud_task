import React from "react";
import { Route, Routes, RedirectFunction, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Favorites from "./pages/Favorites";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
