import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './suggest.css';

function Suggest() {
  return (
    <div>
      <Link to='/home'>
        <button>Skip</button>
      </Link>
      <br></br>
      This is Suggestion Page
      <br></br>
      <Link to='/guides'>
        <button>Next</button>
      </Link>
    </div>
  );
}

export default withRouter(Suggest);
