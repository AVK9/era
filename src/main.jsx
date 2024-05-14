import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { persistor, store } from './store/store.js';
import { ThemeProvider } from 'styled-components';
import 'normalize.css';

import App from './App.jsx';
// import GlobalStyles from './assets/styles/GlobalStyles.jsx';
import { Global, theme } from './assets/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/era">
        {/* <Global styles={GlobalStyles} /> */}
        <ThemeProvider theme={theme}>
          <Global />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
);
