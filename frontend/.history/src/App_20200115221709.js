import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
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
          <button type="submit"> Salvar </button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/12084688?s=460&v=4" alt="Vady Varela"/>
              <div className="user-info">
                <strong> Vady Varela </strong>
                <span> ReactJs, React Native, NodeJs</span>
              </div>
            </header>
            <p>Apaixonado pelas melhores tecnologias de desenvolvimento Web e Mobile - NodeJS - ReactJS & React Native</p>
            <a href="https://github.com/vadyvarela">Acessar perfil do github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
