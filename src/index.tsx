import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toast';

import './index.css';
import App from './containers/app';
import ErrorBoundary from './containers/errorBoundary';
import Fallback from './containers/fallback';
import LanguageProvider from './containers/languageProvider';
import Layout from './containers/layout';
import reportWebVitals from './reportWebVitals';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Layout>
          <ErrorBoundary fallback={<Fallback />}>
            <Provider store={store}>
              <>
                <ToastContainer position="bottom-right" delay={4000} />
                <App />
              </>
            </Provider>
          </ErrorBoundary>
        </Layout>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
