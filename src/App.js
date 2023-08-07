import React from "react";
import Home from "./pages/Home.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddFav from "./pages/Add.js";
import View from "./pages/View.js";
import Edit from "./pages/Edit.js";
import Delete from "./pages/delete.js";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/"     Component={Home} />
          <Route exact path="/add"  Component={AddFav} />
          <Route exact path="/edit" Component={Edit}/>
          <Route exact path="/view" Component={View} />
          <Route exact path="/del" Component={Delete} />
        </Routes>
      </Router>
  );
};

export default App;
