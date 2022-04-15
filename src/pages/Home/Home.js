import React from 'react';
import { Navbar } from '../../components';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from '../../container';

export  const Home = () => {
  return (
    <div id='HomePage'>
     <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    </div>
  )
}
