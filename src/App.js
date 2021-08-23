import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Root from "./pages/Root";
import Home from './pages/Home';
import Signup from './pages/Signup';

import Container from '@material-ui/core/Container';
import Search from './pages/Search';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Container>
        <Root>
          <Switch>
            <Route exact path="/">
              <Home  />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
        </Root>
      </Container>
    </Router>
  );
}

export default App;
