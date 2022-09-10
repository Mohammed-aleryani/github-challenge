import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Foto from './components/Foto.js';
import PersonalInfo from './components/PersonalInfo.js';
import Repo from './components/Repo' 


function App() {
  const [APIUser, setAPIUser] = useState([])
  const [APIRepo, setAPIRepo] = useState([])

  useEffect(()=>{
    axios.get('https://api.github.com/users/Mohammed-aleryani?client_id=2a15e3b5a7517307f962&client_secret=5affeae579d2fd33ccd22fa2876ea080355e2156&sort=created')
      .then((response) => {
      console.log(response.data);
      setAPIUser(response.data)
      
    })
    axios.get('http://api.github.com/users/Mohammed-aleryani/repos?client_id=2a15e3b5a7517307f962&client_secret=5affeae579d2fd33ccd22fa2876ea080355e2156&sort=created')
      .then((response) => {
      console.log(response.data);
      setAPIRepo(response.data)
      
    })

  },[])

  return (
    <div className="main">
      <hr />
      <div className='fotoAndPersonalInfo'>
        <Foto data={APIUser} />
        <PersonalInfo data={APIUser} />
      </div><hr/>

      <div className='repo'>
      <h2> User Repositories</h2>
        <Repo data={APIRepo} />
        
      </div>
    </div>
  );
}

export default App;
