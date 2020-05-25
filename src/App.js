import React, { useState } from 'react';
/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/core';

// function ListTodo(props) {
//   const todos = props.todos;
//   const ListItems = todos.map((todo) =>
//   <li key={todo.toString()}>{todo}</li>
//   );

// const todos = ['learn', 'eat', 'sleep'];
// const todoItems = todos.map((todo) => <li>{todo}</li>);

// function todoList() {
// const [text, setText] = useState('');
// const onChange = (event) => {
//   console.log('onChange', event.target.value);
//   setText(event.target.value);
// };

const headerStyle = css`
  background-color: #66ccff;
  text-align: center;
  border-style: dotted;
  border-color: whitesmoke;
  padding-bottom: 20px;
  color: white;
  text-align: center;
  text-shadow: 1px 1px grey;
`;
const inputStyle = css`
  border-radius: 3px;
  margin: 4px;
`;

const mainStyle = css`
  background-color: magenta;
  text-align: center;
  padding: 50px;
  background-color: #66ccff;
  font-family: sans-serif;
`;

// const [todo, setTodo] = useState('');

function App() {
  const [text, setText] = useState('');
  const onChange = (event) => {
    // console.log('onChange', event.target.value);
    setText(event.target.value);
  };
  // {
  return (
    <div className="App">
      {/* <div css={css``}> */}
      <header className="App-header" css={headerStyle}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <title>Todos list</title>
        <h1>Todos for this week</h1>
        <input type="text" name="todo" onChange={onChange} css={inputStyle} />
        {/* // value={text} /> */}
        <button
          type="button"
          value="show text"
          onClick={function insertText() {
            console.log(text);
          }}
        >
          +
        </button>
      </header>

      <main css={mainStyle}>
        {/* <input
          type="text" */}
        {/* // value={text}
          // onClick={function insertText() { */}
        {/* //   console.log(text);
          // }}
          // onClick={text}
        // > */}
        {/* {text} */}
        <p>{text}</p>

        <input type="Radio"></input>
      </main>
    </div>
  );
}

export default App;
