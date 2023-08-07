import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations.js"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;