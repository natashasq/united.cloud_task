import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Favorites from "./pages/Favorites";

import "./styles.css";


function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
