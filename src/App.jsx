import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import Detail from './components/Detail';
import Error404 from './components/Error404';
import Category from './components/Category';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/category/:category_name?">
          <Category />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  )

}

export default App;
