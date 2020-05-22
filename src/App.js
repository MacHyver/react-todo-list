import React from 'react';
/** @jsx jsx */
import { jsx, css, Global, ClassNames } from '@emotion/core';

const headerStyle = css`
  background-color: lightgrey;
  text-align: center;
`;

const mainStyle = css`
  background-color: magenta;
  text-align: center;
`;

function App() {
  return (
    <div className="App">
      {/* <div css={css``}> */}
      <header className="App-header" css={headerStyle}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Todos this week</h1>
        <input type="text"></input>
        <input type="submit" value="+"></input>
      </header>
      {/* </div> */}
      <main css={mainStyle}>
        <input type="Radio"></input>
      </main>
    </div>
  );
}

export default App;
