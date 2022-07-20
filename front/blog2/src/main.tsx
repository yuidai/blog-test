import React from 'react';
import ReactDOM from 'react-dom/client';
import {createClient, Provider} from "urql";
import App from './App';
import './index.css';

const client = createClient({
  url: 'http://localhost:3000/graphql',
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
