import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App'
import { ThemeProvider } from './Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
        <Provider store={store}>
            <Suspense fallback={<div>Loading</div>}>
            <ThemeProvider>
             <App/>
            </ThemeProvider>
            </Suspense>
        </Provider>
    </BrowserRouter>
);
