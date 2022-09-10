import React from 'react';
import '../App.css';

const PersonalInfo = ({data}) => {
  return (
    <div >
        <ul className='personal-container'>
        <li><span>Full name: </span>    {data.name}</li>
        <li><span>User name: </span>    {data.login}</li>
        <li><span>Location :</span>     {data.location}</li>
        <li><span>Location :</span> {data.email}</li>
        </ul>
    </div>
  )
}

export default PersonalInfo