import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import store from './redux/store';
import { Provider as ReduxProvider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>
)
