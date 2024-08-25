import React from "react";
import { Route, Routes } from "react-router-dom";
//Components
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";

import "./styles.css";
import Faovites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Faovites />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
