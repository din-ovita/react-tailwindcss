import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import CV from "./CV"

function App() {
  return (
    <>
    <Routes>
      <Route path='/cv' element={<CV/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
