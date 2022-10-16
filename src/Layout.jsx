import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Poput from './components/Poput/Poput';


export default function Layout() {
  return (
    // <div className="layout" style={{backgroundColor: 'rgba(30, 14, 0, 0.36)'}}>
    <>
          <Poput />
          {/* <div className='footer'> */}
          <NavBar />
          {/* </div> */}
    </>
    // </div>
  );
}