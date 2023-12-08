function App() {
  return (

    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">GibaCoin | G₿C | Token BEP-20</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
            <a className="nav-link fw-bold py-1 px-0" href="#">Features</a>
            <a className="nav-link fw-bold py-1 px-0" href="#">Contact</a>
          </nav>
        </div>
      </header>

      <main className="px-3">
        <h1>Get your tokens!</h1>
        <p className="lead">Once a day, earn 1.000 GibaCoins for free just connecting your MetaMask® below.</p>
        <p className="lead">          
          <a href="#" className="btn btn-lg btn-dark fw-bold border-white bg-dark">
          <img src="/assets/metamask.svg" alt="MetaMask logo" width={48}/> Connect MetaMask</a>
        </p>
      </main>

      <footer className="mt-auto text-white-50">
        <p>Built by <a href="https://github.com/andersonjeronimo" className="text-white">@andersonjeronimo</a>.</p>
      </footer>
    </div>
  );
}

export default App;
