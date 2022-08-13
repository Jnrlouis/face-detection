import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='no-underline near-black bg-animate bg-near-white hover-bg-gray inline-flex items-center ma4 tc br2 pa2 f4 link pointer'>Sign Out</p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '5%'}}>
          <p onClick={() => onRouteChange('signin')} className='no-underline near-black bg-animate bg-near-white hover-bg-gray inline-flex items-center ma4 tc br2 pa2 f4 link pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='no-underline near-black bg-animate bg-near-white hover-bg-gray inline-flex items-center ma4 tc br2 pa2 f4 link pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;