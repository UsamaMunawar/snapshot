import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home';
import About from './components/About/About';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
          </Switch>
        </Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
