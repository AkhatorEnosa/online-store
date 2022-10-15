import React, { useEffect, useState } from 'react';
import './App.css';
import Benefits from './components/Benefits';
import Footer from './components/Footer';
import Hot from './components/Hot';
import MegaSales from './components/MegaSales';
import NavBar from './components/NavBar';
import NewProducts from './components/NewProducts';
import Sections from './components/Sections';

function App() {
const [product, setProduct] = useState([]);

//const randomNum = Math.floor(Math.random() * 30) + 1;

useEffect(()=> {
  //console.log(randomNum);
const randomNum = Math.floor(Math.random() * 30) + 1;
 
  let mounted = true;
  fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(item => {
             if(mounted) {
                 setProduct(item.products[randomNum])
            } 
        })
     return () => mounted = false;
}, [] );

  return (
    <div className="h-screen">
      {console.log(product)}
      <NavBar/>
      <Hot 
        price={product.price}
        description={product.description}
        title={product.title}
        discountPercentage={product.discountPercentage}
        thumbnail={product.thumbnail}
      />
      <NewProducts />
      <MegaSales />
      <Sections />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
