import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

import './Loader.css';

const Loader = (props) => (
  <div className='loader'>
    <ScaleLoader size={15} color={'#556B2F'} css='margin-right: 1rem' />
  </div>
);

export default Loader;