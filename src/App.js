import './App.css';
import Hot from './components/Hot';
import MegaSales from './components/MegaSales';
import NavBar from './components/NavBar';
import NewProducts from './components/NewProducts';

function App() {
  return (
    <div className="h-screen">
      <NavBar/>
      <Hot/>
      <NewProducts />
      <MegaSales />
    </div>
  );
}

export default App;
