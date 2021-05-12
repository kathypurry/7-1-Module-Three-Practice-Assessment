import "./App.css";
import NavBar from './components/NavBar'
import {Switch,Route} from 'react-router-dom'
import Pokemon from './components/Pokemon'
import Locations from './components/Locations'
import Berries from './components/Berries'

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <main>
        <Switch>
        <Route exact path = '/' >
        <h1>Welcome to My Pokemon App!</h1>
        </Route>
        <Route path = '/pokemon' component={Pokemon}></Route>
        <Route path = '/locations' component={Locations}></Route>
        <Route path = '/berries' component={Berries}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
