import React, { Component } from "react";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username } = this.state;

    const user = {
      username,
    };
    console.log(user);
    // Gets the current page and redirects to here after the method runs
    this.setState({ username: "" });
  };

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input type="submit" value="add user" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
