import React from 'react';
import './global.css';
import './App.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form action="">
          <div className="input_block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input type="text" name="github_username" id="github_username" required />
          </div>
          
          <div className="input_block">
            <label htmlFor="techs">Tecnologians</label>
            <input type="text" name="techs" id="techs" required />
          </div>

          <div className="input_group">
            <div className="input_block">
              <label htmlFor="latitude">Latitude</label>
              <input type="text" name="latitude" id="latitude" required />
            </div>
            <div className="input_block">
              <label htmlFor="longitude">Longitude</label>
              <input type="text" name="longitude" id="longitude" required />
            </div>
            
          </div>
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
