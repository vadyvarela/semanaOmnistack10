import React, {useState, useEffect} from 'react';

function DevForm({ onSubmit }){
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

    async function handleSubmit(e) {
        e.preventDefault();
        
        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude,
        });

        setGithubUsername('');
        setTechs('');
    }

    return(
        <form onSubmit={handleSubmit}>
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
    )
}


export default DevForm;