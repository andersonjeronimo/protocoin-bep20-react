import React from 'react';
import logo from './logo.svg';
import './App.css';
import { mint } from './Web3Service';

function metamaskBtnClick() {
  mint()
    .then(() => console.log())
    .catch(err =>alert(err.message));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Earn 1.000 ProtoCoins once a day connecting your MetaMask® below
        </p>
        <button type="button" className='Button' onClick={metamaskBtnClick}>
          <img src="/assets/metamask.svg" alt="MetaMask logo" width={256} />
        </button>




      </header>
    </div>
  );
}

export default App;
