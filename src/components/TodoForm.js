import React, { useState } from 'react';
import Style from '../style.css';

export default class TodoForm extends React.Component {
  state = {
    text: '',
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: '',
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="Form"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="here goes the todo"
          />
          <button className="Button" onClick={this.handleSubmit}>
            <i class="fas fa-plus"></i>
          </button>
        </form>
      </div>
    );
  }
}
