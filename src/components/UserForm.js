import React, { Component } from 'react';

class UserForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.submitUserRequest}>
        <h2 className="hidden">User Not Found</h2>
        <input
          className="username-text"
          type="text"
          placeholder="Github Username"
          value={this.props.inputText}
          onChange={(event) => this.props.updateText(event.currentTarget.value)}
        />
        <input type="submit" value="View" />
      </form>
    );
  }
}

export default UserForm;
