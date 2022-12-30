import React, { useEffect, useState } from 'react';
import './App.css';
import Benefits from './components/Benefits';
import Cart from './components/Cart';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Hero from './components/Hero';
// import Hot from './components/Hot';
import MegaSales from './components/MegaSales';
import NavBar from './components/NavBar';
import NewProducts from './components/NewProducts';
import Sections from './components/Sections';


import Shoe from './assets/shoe.jpeg'

function App() {

const [headerProduct, setHeaderProduct] = useState({
  category: "men's clothing",
  description: "Legendary Air gets lifted First lifestyle Air Max brings you styke, comfort and 270 degrees of Air. Its tinted Air winddow lets you showcase one of our greatest innovations.",
  id: 444,
  image: Shoe,
  price: 109.95,
  rating: {rate: 3.9, count: 120},
  title: "Nike Air Max 270"
});

const [products, setProducts] = useState([]);
// const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(true);

// start cart
  const [cart, setCart] = useState([]);
  // const [found, setFound] = useState(false);
  const [show, setShow] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  // add item to cart
  const addItem = (item) => {
    if (cart.includes(item)) {
      // setFound(true);
      alert("Item already in cart.");
    } else {
      // setFound(false);
      // setCart([...cart, item]);
      cart.push(item);
      setItemCount(itemCount+1)
    }

    console.log(cart);
  }

  const handleShow = () => {
    setShow(!show);
    console.log()
  }
  //cart


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
// const randomNum = Math.floor(Math.random() * 30) + 1;
 
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
                 setProducts(item);
                //  setProduct(item[randomNum]);
            } 
        })
        .catch(error => {
          console.error(error)
        })
        .finally(() => {
          setLoading(false);
                 setError(false);
        });
     return () => mounted = false;
}, [] );

  if(!loading && !error) {
    return (
      <div className="h-screen flex flex-col justify-between">
        <NavBar handleShow={handleShow} itemCount={itemCount}/>
        <ErrorBoundary>
          <Hero 
            item={headerProduct} handleClick={addItem}
          />
          {/* <Hot 
            price={product.price}
            description={product.description}
            title={product.title}
            // discountPercentage={product.discountPercentage}
            image={product.image}
            loading={loading}
            error={error}
            
            product={products}
            category={product.category}
          /> */}

          <NewProducts 
            products = {products}
            addItem = {addItem}
            />
          <MegaSales />
          <Sections 
              products = {products}
              />
          <Benefits />
          <Footer />
            </ErrorBoundary>
          <Cart 
              show={show} 
              handleShow={handleShow}
            />
      </div>
    );
  } else {
    return (
      <div className="h-screen bg-[#fe4343]">
        <div className="w-full h-full flex flex-col justify-center items-center align-middle">
          <div className="p-10 rounded-full bg-black animate-bounce"></div>
          <p className='self-center'>Loading</p>
        </div>
      </div>
    )
  }
}

export default App;
