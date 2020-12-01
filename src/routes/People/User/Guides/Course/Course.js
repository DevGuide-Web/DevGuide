import React from 'react';
import NavBar from '../../../../../components/NavBar';
import { Link } from 'react-router-dom';
import '../../../../content.css';

export default function Course() {
  return (
    <div>
      <NavBar />
      <div className='course-page'>This is Course Page</div>
    </div>
  );
}
