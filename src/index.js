import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDo from './components/ToDo';

ReactDOM.render(
  <React.StrictMode>
    <h1>React To-Do</h1>
    <ToDo />
  </React.StrictMode>,
  document.getElementById('root')
);


