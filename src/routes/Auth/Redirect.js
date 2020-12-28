import React from 'react';
import { withRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function Redirect() {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: 'center', marginTop: '30vh', fontSize: '45px' }}>
        LINK NOT FOUND
      </h1>
    </div>
  );
}

export default withRouter(Redirect);
