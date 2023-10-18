import { BrowserRouter, Switch ,Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import L from './components/Link';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/linkedin' component={L} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
