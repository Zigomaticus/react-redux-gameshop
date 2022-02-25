import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages
import HomePage from "./pages/home-page/home-page";

// Components
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
