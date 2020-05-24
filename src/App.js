import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import history from './services/history';
import store from './store';
import { light } from './styles';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={light}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
