import logo from './react-logo.png';
import './App.css';

function App() {
  return (
    <div className="app">
        <img src={logo} className="img-logo" alt="rect logo"/>
        <h1 className="header">Fun facts about React</h1>
      <ul className="list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprice apps, including mobile apps</li>
      </ul>
    </div>
  
  );
}

export default App;


  // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>