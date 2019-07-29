import React from 'react';
import Header from './components/Header';

import CategoriesProvider from './context/CategoriesContext';

function App() {
  return (
    <CategoriesProvider>
      <Header />
    </CategoriesProvider>
  );
}

export default App;
