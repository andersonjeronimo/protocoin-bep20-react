import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { mint } from './Web3Service';

function App() {

  const [message, setMessage] = useState("Messages will be displayed here!");

  function metamaskBtnClick() {
    setMessage(`Processing your request...wait...`)
    mint()
      .then((tx) => setMessage(`Your tokens were sent! Tx: ${tx}`))
      .catch(err => setMessage(`${err.message}`));
  }

  return (
    <div className="App-wrap">
      <div className="alert alert-primary" role="alert">
        {message}
      </div>
      {/* <img className="App-bg" src="/assets/bep-banner.svg" alt="Wallpaper" /> */}
      <header className="App-content">
        <img src={logo} className="App-logo" alt="logo" />       
        <p></p>
        <p></p>
        <p></p>
        <h1>Get your Coins!</h1>        
        <p></p>
        <p>
          Earn 1.000 coins* once a day just connecting your MetaMask® below.
        </p>
        <p></p>        
        <button type="button" className='Button' onClick={metamaskBtnClick}>
          <img src="/assets/metamask.svg" alt="MetaMask logo" width={256} />
        </button>
      </header>
    </div>
  );
}

export default App;
