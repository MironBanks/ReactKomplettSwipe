import React from 'react';
import './App.css';

import Header from './components/Header'
import Breadcrumb from './components/Breadcrumb';
import Product from './components/Product';
import Spec from './components/Spec'

function App() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <Product />
      <Spec />
    </>
  );
}

export default App;
