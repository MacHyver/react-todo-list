// import React, { useState } from 'react';

// /** @jsx jsx */
// import { jsx, css, Global, ClassNames } from '@emotion/core';

// // function ListTodo(props) {
// //   const todos = props.todos;
// //   const ListItems = todos.map((todo) =>
// //   <li key={todo.toString()}>{todo}</li>
// //   );

// // const todos = ['learn', 'eat', 'sleep'];
// // const todoItems = todos.map((todo) => <li>{todo}</li>);

// // function todoList() {
// // const [text, setText] = useState('');
// // const onChange = (event) => {
// //   console.log('onChange', event.target.value);
// //   setText(event.target.value);
// // };

// // const [todo, setTodo] = useState('');

// function App() {
//   const [text, setText] = useState('');
//   const onChange = (event) => {
//     /* console.log('onChange', event.target.value); */
//     setText(event.target.value);
//   };
//   // {
//   return (
//     <div className="App">
//       {/* <div css={css``}> */}
//       <header className="App-header" css={headerStyle}>
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <title>Todos list</title>
//         <h1>Todos for this week</h1>
//         <input type="text" name="todo" onChange={onChange} css={inputStyle} />
//         {/* // value={text} /> */}
//         <button
//           type="button"
//           value="show text"
//           onClick={function insertText() {
//             console.log(onClick.text);
//           }}
//         >
//           +
//         </button>
//       </header>

//       <main css={mainStyle}>
//         {/* <input
//           type="text" */}
//         {/* // value={text}
//           // onClick={function insertText() { */}
//         {/* //   console.log(text);
//           // }}
//           // onClick={text}
//         // > */}
//         {/* {text} */}
//         <p>{text}</p>

//         <input type="Radio"></input>
//       </main>
//     </div>
//   );
// }

// export default App;
/** @jsx jsx */

import { jsx, css } from '@emotion/core';
import React, { Component } from 'react';
import './style.css';
import TodoList from './components/TodoList.js';

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Body">
          <TodoList />
        </div>
      </div>
    );
  }
}
export default App;
