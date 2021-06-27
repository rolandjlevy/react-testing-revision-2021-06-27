import './App.css';

import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [toggleState, setToggleState] = useState(false);
  const [user, getUser] = useState(null);
  const handleClick = () => setToggleState(!toggleState);

  const fetchUser = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    const { data } = await axios.get(url);
    getUser(data);
  };
  return (
    <div className="App">
      <main>
        
      <section className="flex row align-center m-b-10">
          <button className="btn m-5" onClick={handleClick}>
            Toggle
          </button>
          {toggleState && (<h1 className="m-5">🚀</h1>)}
        </section>

        <section className="flex row align-center m-b-10">
          <button className="btn m-5" onClick={fetchUser}>
            Get user
          </button>
          {user ? (<code><h6 className="m-5">{JSON.stringify(user)}</h6></code>) : '' }
        </section>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main>
    </div>
  );
}

export default App;
