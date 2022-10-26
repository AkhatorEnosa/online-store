import React, { useState } from "react";
import ShopBag from '../assets/happy.png';

const MegaSales = () => {
  const[countdown, setCountDown] = useState("");
    // Set the date we're counting down to
    var countDownDate = new Date("Nov 5, 2022 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      setCountDown(days + "d : " + hours + "h : "
      + minutes + "m : " + seconds + "s");

      // If the count down is finished, write some text
      // if (distance < 0) {
      //   clearInterval(x);
      //   document.getElementById("demo").innerHTML = "EXPIRED";
      // }
    }, 1000);

  return (
    <div className="w-full flex justify-center align-middle bg-[#f7f5ed] items-center px-10 lg:px-20 py-20 shadow-sm z-30">
        <img src={ShopBag} alt="shopping bag" className='lg:w-[30rem] md:w-[25rem] w-[10rem]'/>
      <div className="flex flex-col ml-10 z-50">
        <p className='md:text-base text-xs text-center'>THE BIGGEST SALE OF THE YEAR</p>
        <h1 className='lg:text-7xl text-3xl tracking-tight font-extrabold text-center'>Mega Shopping Fiesta</h1>
        <h1 className='mt-6 text-center lg:text-5xl text-2xl tracking-tight font-bold uppercase'>{countdown}</h1>

        {/* <button className="px-8 py-2 hover:bg-[#fe4343] hover:text-black bg-[#000] text-white my-4 shadow-md duration-300">
          Shop Now
        </button> */}
      </div>
    </div>
  )
}

export default MegaSales
