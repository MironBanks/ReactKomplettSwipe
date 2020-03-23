import React from 'react';
import './App.css';

import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb';
import Product from './components/Product';

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Product />
    </>
  );
}

export default App;
