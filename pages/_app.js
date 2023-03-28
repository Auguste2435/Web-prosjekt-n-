import MainLayout from '../src/components/layout/main-layout';
import '../styles/globals.css';
import '../styles/general.sass';
import React, { Component } from 'react';

import store from '../redux/store';
import { Provider } from 'react-redux';

import { Footer } from '../src/components/footer/footer';
import { Header } from '../src/components/header/header'



function MyApp({ Component, pageProps }) {


  return (
    <>
      <Provider store={store}>
        <div className="wrapper">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Provider>
      {/* <Cart></Cart>
      <MainLayout>

        <Component {...pageProps} />

      </MainLayout> */}

    </>

  );
}

export default MyApp;
