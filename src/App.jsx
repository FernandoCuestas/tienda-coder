import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home';
import Detail from './components/Detail';
import Error404 from './components/Error404';
import Category from './components/Category';
import FreeShipping from './components/FreeShipping';
import Footer from './components/Footer';
import Cart from './components/Cart/Cart';
import {Store} from './Store';

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    freeShipping: 4000,
    cuotas: 3
  })
  return (
    <Store.Provider value={[data, setData]}>
        <BrowserRouter>
          <FreeShipping/>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cart">
              <Cart />
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
          <Footer/>
        </BrowserRouter>
    </Store.Provider>
  )
}

export default App;
