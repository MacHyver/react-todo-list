import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Style from '../style.css';

export default class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: 'all',
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (text) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.text === text) {
          return {
            text: todo.text,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };
  updateTodoToShow = (i) => {
    this.setState({
      todoToShow: i,
    });
  };

  handleDeleteTodo = (text) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.text !== text),
    });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === 'all') {
      todos = this.state.todos;
    } else if (this.state.todoToShow === 'open') {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === 'done') {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div className="Background">
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            toggleComplete={() => this.toggleComplete(todo.text)}
            deleteTodo={() => this.handleDeleteTodo(todo.text)}
            todo={todo}
          />
        ))}
        <div className="Bottom">
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button
            className="Button"
            onClick={() => this.updateTodoToShow('all')}
          >
            <i class="far fa-list-alt"></i>
          </button>
          <button
            className="Button"
            onClick={() => this.updateTodoToShow('open')}
          >
            <i class="fab fa-rebel"></i>
          </button>
          <button
            className="Button"
            onClick={() => this.updateTodoToShow('done')}
          >
            <i class="fas fa-glass-cheers"></i>
          </button>
        </div>
      </div>
    );
  }
}
