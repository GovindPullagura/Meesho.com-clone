import React from "react";
import AllRoutes from "./Components/AllRoutes";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Indi Shop</h1>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
