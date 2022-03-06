import * as React from "react-dom";
import { ReactDOM } from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Start from "./pages/Start";
import Cv from "./pages/Cv";
import Om from "./pages/Om";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Start />}/>
          <Route path="/cv" element={<Cv />}/>
          <Route path="/om" element={<Om />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
