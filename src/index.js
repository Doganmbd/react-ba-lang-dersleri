import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App'; */
/* import Counter from "./component/Counter"; // Counter ı aşağıda kullanmam gerekir. */
/* import Inputt from "./component/InputExample"; */
import Inputt2 from "./component/InputExample2";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Inputt2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
