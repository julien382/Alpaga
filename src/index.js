import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const isLocalDevelopment = process.env.NODE_ENV === 'development';
const basename = isLocalDevelopment ? '/' : '/Alpaga';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
