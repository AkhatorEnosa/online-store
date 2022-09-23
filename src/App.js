import './App.css';
import Hot from './components/Hot';
import NavBar from './components/NavBar';
import NewProducts from './components/NewProducts';

function App() {
  return (
    <div className="h-screen">
      <NavBar/>
      <Hot/>
      <NewProducts />
    </div>
  );
}

export default App;
