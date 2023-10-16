import "./App.css";
import Home from "./Component/Home";
import Add from "./Component/Add";
import Edit from "./Component/Edit";
import View from "./Component/View";
import Chart from "./Component/Chart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/view" element={<View />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
