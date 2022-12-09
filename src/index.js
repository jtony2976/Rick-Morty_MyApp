import React from 'react'
//The react-dom/client package provides client-specific methods used for initializing an app on the client
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import './index.css'
import App from './App'
import store from './redux/store/store';



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />    
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
)


