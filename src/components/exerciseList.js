import React, { Component } from "react";

import axios from "axios";
import Exercise from "./Exercise";

export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.state = { exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        this.setState({ exercises: response.data });
      })
      .catch((error) => {
        console.log("Error: " + error);
      });
  }

  deleteExercise = (id) => {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });
    this.setState({
      exercises: this.state.exercises.filter((el) => el._id !== id),
    });
  };

  exerciseList = () => {
    return this.state.exercises.map((currentExercise) => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={this.deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <h2>Exercise List</h2>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
