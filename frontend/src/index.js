import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { DrizzleProvider } from "drizzle-react";

// import contract
import CappedToken from './contracts/CappedToken.json';
import Crowdsale from "./contracts/Crowdsale.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws//127.0.0.1:8545"
    }
  },
  contracts: [
    CappedToken,
    Crowdsale
  ],
  events: {}
};

ReactDOM.render(
  <DrizzleProvider options={options}>
    <App />
  </DrizzleProvider>, 
  document.getElementById('root')
);
registerServiceWorker();
