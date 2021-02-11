import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/header';

function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <ToastContainer
                    position="top-center"
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                />
                <Header />
                <Routes />
            </BrowserRouter>
        </>
    );
}

export default App;
