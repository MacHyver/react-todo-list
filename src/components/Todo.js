import React from 'react';
import Style from '../style.css';

export default (props) => (
  <div>
    <div style={{ display: 'flex' }}>
      <div
        className="Todostyle"
        style={{ textDecoration: props.todo.complete ? 'line-through' : '' }}
        onClick={props.toggleComplete}
      >
        {props.todo.text}
      </div>{' '}
      <button className="Button" onClick={props.deleteTodo}>
        <i class="far fa-trash-alt"></i>
      </button>
    </div>
  </div>
);
