import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/global.css"
import App from './App';
import {
  BrowserRouter as Router
} from "react-router-dom"
import { GlobalProvider } from './shared/provider/GlobalProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Router>
  <GlobalProvider>
    <App />
    </GlobalProvider>

    </Router>
  </React.StrictMode>
);

