import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import exerciseList from "./components/exerciseList";
import createUser from "./components/createUser";
import editExercise from "./components/editExercise";
import createExercise from "./components/createExercise";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={exerciseList} />
        <Route path="/create" exact component={createExercise} />
        <Route path="/user" component={createUser} />
        <Route path="/edit/:id" component={editExercise} />
      </div>
    </Router>
  );
}

export default App;
