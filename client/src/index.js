import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppProvider} from "@shopify/polaris";
import App from "./App";
import "@shopify/polaris/build/esm/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider theme={{colorScheme: "light"}}>
    <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
