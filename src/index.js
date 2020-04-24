import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { store } from "./store";

import App from './App';
import './index.css';

const rootComponent = () => {
  return (
    <Provider store={ store }>
      <App />
    </Provider>
  );
}

ReactDOM.render(
  rootComponent(),
  document.getElementById('root')
);
