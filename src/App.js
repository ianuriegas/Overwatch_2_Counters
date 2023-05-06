import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ElevateAppBar from "./Components/ElevateAppBar";

function App() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.hdqwalls.com/wallpapers/overwatch-2020-game-4k-6r.jpg")',
        backgroundSize: "cover",
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <BrowserRouter>
        <div>
          <ElevateAppBar></ElevateAppBar>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
