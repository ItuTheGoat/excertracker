import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Exercise = (props) => {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.exercise._id}>edit</Link> |
        <Link
          className="text-danger"
          to="#"
          onClick={() => props.deleteExercise(props.exercise._id)}
        >
          {" "}
          delete
        </Link>
      </td>
    </tr>
  );
};

export default Exercise;
