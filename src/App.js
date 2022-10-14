import './App.css';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Hot from './components/Hot';
import MegaSales from './components/MegaSales';
import NavBar from './components/NavBar';
import NewProducts from './components/NewProducts';
import Sections from './components/Sections';

function App() {
  return (
    <div className="h-screen">
      <NavBar/>
      <Hot/>
      <NewProducts />
      <MegaSales />
      <Sections />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
