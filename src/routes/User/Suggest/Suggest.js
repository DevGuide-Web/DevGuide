import React from 'react';
import { Link } from 'react-router-dom';
import './suggest.css';

export default function Suggest() {
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
