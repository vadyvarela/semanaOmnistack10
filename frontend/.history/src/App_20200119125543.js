import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

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
        <form onSubmit={handleAddDev}>
          <div className="input_block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input
              name="github_username" 
              id="github_username" 
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
              required 
            />
          </div>
          
          <div className="input_block">
            <label htmlFor="techs">Tecnologians</label>
            <input
              name="techs" 
              id="techs" 
              required 
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input_group">
            <div className="input_block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="text" 
                name="latitude" 
                id="latitude" 
                value={latitude} 
                required 
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input_block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="text" 
                name="longitude" 
                id="longitude" 
                value={longitude} 
                required 
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>
          <button type="submit"> Salvar </button>
        </form>
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
