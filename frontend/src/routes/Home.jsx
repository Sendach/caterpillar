import React, { useState } from 'react';
import { Navbar, SignUpPopup, LoginPopup } from '../components/index';

const Home = ({ signUpPopupForm }) => {
  return (
    <>
      {signUpPopupForm 
        ? <SignUpPopup />
        : null
      }
    </>
  );
}

export default Home;