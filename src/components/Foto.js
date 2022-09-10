import React from 'react';
import '../App.css';

const Foto = ({data}) => {
    const firstObject=data.avatar_url
  return (
    <div className='photo'>
          <img src={firstObject} alt="profile Img" />
    </div>

  )
}

export default Foto 