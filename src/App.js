import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainRoute from './routes';
import Header from './screens/Header';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainRoute />
    </BrowserRouter>
  );
};

export default App;
