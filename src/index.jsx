import './index.css';
import './mocks';
// import './utils/chart';
import 'nprogress/nprogress.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router';

import App from './App';
import { AuthProvider } from './contexts/JWTAuthContext';
import { SidebarProvider } from './contexts/SidebarContext';
import ScrollTop from './hooks/useScrollTop';
import reportWebVitals from './reportWebVitals';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <SidebarProvider>
          <BrowserRouter>
            <ScrollTop />
            <AuthProvider>
              <App />
            </AuthProvider>
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
