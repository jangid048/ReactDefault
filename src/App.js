import logo from './logo.svg';
import './App.css';
import Store from "./store"
import { Provider } from 'react-redux'
import Navigation from './route/navigation';
import React from 'react';

function App() {
  return (
    <React.Fragment >
         <Provider store={Store}>
          <Navigation />
         </Provider>
    </React.Fragment>
  );
}

export default App;
