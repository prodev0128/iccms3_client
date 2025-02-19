import './index.css';
import 'nprogress/nprogress.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import App from './App';
import { SidebarProvider } from './contexts/SidebarContext';
import ScrollTop from './hooks/useScrollTop';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <SidebarProvider>
          <BrowserRouter>
            <ScrollTop />
            <App />
          </BrowserRouter>
        </SidebarProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
