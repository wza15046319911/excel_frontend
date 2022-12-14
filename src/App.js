import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getData = async() => {
      let url = 'https://excel-backend1-1763036-1302668990.ap-shanghai.run.tcloudbase.com/api/data';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setData(data);
    }
    getData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
