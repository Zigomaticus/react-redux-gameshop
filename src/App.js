import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux";

//Pages
import HomePage from "./pages/home-page/home-page";

// Components
import Header from "./components/header/header";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
