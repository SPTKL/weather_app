import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// render this app to this div --> take it to root
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
