import logo from './logo.svg';
import './App.css';

function testxhr() {
    var xhr = new XMLHttpRequest();

let counts = {
  loadstart: 0,
  progress: 0,
  abort: 0,
  error: 0,
  load: 0,
  timeout: 0,
    loadend: 0,
    readystatechange: 0
};

xhr.onloadstart = function () {
  counts.loadstart++;
  console.log(`onloadstart was called ${counts.loadstart} times.`);
};

xhr.onprogress = function () {
  counts.progress++;
  console.log(`onprogress was called ${counts.progress} times.`);
};

xhr.onabort = function () {
  counts.abort++;
  console.log(`onabort was called ${counts.abort} times.`);
};

xhr.onerror = function () {
  counts.error++;
  console.log(`onerror was called ${counts.error} times.`);
};

xhr.onload = function () {
  if (xhr.status === 200) {
      console.log(`type of response is ${typeof xhr.response}`);
  }
  counts.load++;
  console.log(`onload was called ${counts.load} times.`);
};

xhr.ontimeout = function () {
  counts.timeout++;
  console.log(`ontimeout was called ${counts.timeout} times.`);
};

xhr.onloadend = function () {
  counts.loadend++;
  console.log(`onloadend was called ${counts.loadend} times.`);
};
    
    xhr.onreadystatechange = function () {
        counts.readystatechange++;
        console.log(`onreadystatechange was called ${counts.readystatechange} times.`);
    }

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.send();

}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <button onClick={() => {testxhr()}}>Test XHR</button>
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
