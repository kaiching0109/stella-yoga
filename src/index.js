import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/index.scss'
import * as serviceWorker from './serviceWorker';
import App from './pages/App';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
