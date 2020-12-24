import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Detail from './components/Detail';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido"/>
      <Detail/>      
    </>
  )

}

export default App;
