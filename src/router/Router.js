import React from "react";
import { Route, Routes } from "react-router-dom";

import Final from "../pages/Final";
import Home from "../pages/Home";
import PlayTime from "../pages/PlayTime";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/play-time" element={<PlayTime />}></Route>
      <Route path="/final" element={<Final/>}></Route>
    </Routes>
  );
}

export default Router;
