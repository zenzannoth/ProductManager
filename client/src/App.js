import './App.css';
import { Router } from "@reach/router";
import Main from "./views/Main";
import Detail from "./views/Detail";



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Main path="/products/" />
        <Detail path="/products/:id" />
      </Router>
      </header>
    </div>
  );
}

export default App;
