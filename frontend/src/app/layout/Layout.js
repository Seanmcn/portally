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
        <section className='section' role={'main'} >
            <Router />
        </section>
        <Footer />
      </>
    )
  }

}
export default Layout