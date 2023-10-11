import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";

import 'primeicons/primeicons.css';

// import { Link } from 'react-router-dom';
        

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <PrimeReactProvider>
        <PrimeReactContext.Consumer>{() => <App />}</PrimeReactContext.Consumer>
      </PrimeReactProvider>
    </React.StrictMode>
  </BrowserRouter>
);




