import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store/store';
import './styles/reset.css';
import './styles/normalize.css';
import './styles/main.css';



const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
