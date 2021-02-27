import React from 'react'
import Footer from './partials/Footer';
import Header from './partials/Header';
import Router from '../Router';
import HelmetDefault from './helmet/HelmetDefault';

class Layout extends React.Component {

  render(){
    return(
      <>
        <HelmetDefault />
        <Header />
        <Router />
        <Footer />
      </>
    )
  }

}
export default Layout