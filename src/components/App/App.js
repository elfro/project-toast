import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import ToastProvider from '../ToastProvider';
import ToastShelf from '../ToastShelf';

function App() {
  return (
    <ToastProvider>
        <ToastShelf/>
        <ToastPlayground />
        <Footer />
    </ToastProvider>
  );
}

export default App;
