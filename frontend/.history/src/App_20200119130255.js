import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function LoadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);
    }

    LoadDevs();
  })

  async function handleAddDev(e){
    e.preventDefault();
    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    })

    console.log(response);

    setGithubUsername('');
    setTechs('');

    setDevs([...devs, response.data]);
  }
  

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
