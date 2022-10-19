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
const [products, setProducts] = useState([]);
const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(()=> {
  //console.log(randomNum);
  // let num = 11000;
  // let numToString = num.toString();
  // let newString = [];
  //     // console.log("This is ", numToString[numToString.length - 1]);
  //     for(let i=numToString.length-1; i >= 0; i--) {
  //       newString.push(numToString[i]);
  //       if(i%2 == 0) {
  //         newString.splice(i,0,",");
  //       }
  //         // newString.push(numToString[i]);
  //       console.log(newString);
  //       // console.log(numToString[i]);
  //     }
const randomNum = Math.floor(Math.random() * 30) + 1;
 
  let mounted = true;
  fetch('https://fakestoreapi.com/products')
        .then(response => {
          if(response.ok){
            return response.json();
          }
          throw response;
        })
        .then(item => {
             if(mounted) {
                 setProducts(item)
                 setProduct(item[randomNum])
            } 
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          setLoading(false)
        });
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
        // discountPercentage={product.discountPercentage}
        image={product.image}
        loading={loading}

        product={products}
        category={product.category}
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
