import React, { useState } from 'react'
import ShopBag from '../assets/happy.png'

const MegaSales = () => {
  const [countdown, setCountDown] = useState('')
  // Set the date we're counting down to
  var proposedDate = new Date('Nov 15, 2022 12:46 :00')
  var countDownDate = proposedDate.getTime()

  // Get today's date and time
  var now = new Date().getTime()

  // Find the distance between now and the count down date
  var distance = countDownDate - now

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    // Display the result
    setCountDown(
      days + 'd : ' + hours + 'h : ' + minutes + 'm : ' + seconds + 's',
    )

    // If the count down is finished, write some text
    if (distance === 0) {
      clearInterval(x)
      setCountDown('')
    }
  }, 1000)

  return (
    <div className="w-full flex justify-center align-middle bg-[#f7f5ed] items-center px-10 lg:px-20 py-20 shadow-sm z-30">
      <img
        src={ShopBag}
        alt="shopping bag"
        className="lg:w-[30rem] md:w-[25rem] w-[14rem] md:relative absolute md:left-0 right-60"
      />

      {distance < 0 ? (
        <div className="flex flex-col ml-10 z-50">
          <p className="md:text-base text-xs text-center">
            THE BIGGEST SALE OF THE YEAR
          </p>
          <h1 className="lg:text-7xl md:text-3xl text-2xl tracking-tight font-extrabold text-center">
            Mega Shopping Fiesta
          </h1>
          {/* <h1 className='mt-6 text-center lg:text-3xl text-2xl tracking-tight font-bold uppercase'>{countdown}</h1> */}
          <button className="px-10 md:px-32 py-3 mx-auto rounded-lg hover:bg-[#fe4343] hover:text-black bg-[#000] text-white my-4 shadow-md cursor-pointer duration-300">
            Explore
          </button>
        </div>
      ) : (
        <div className="flex flex-col ml-10 z-50">
          <p className="md:text-base text-xs text-center">
            THE BIGGEST SALE OF THE YEAR
          </p>
          <h1 className="lg:text-7xl text-3xl tracking-tight font-extrabold text-center">
            Mega Shopping Fiesta
          </h1>
          <h1 className="mt-6 text-center lg:text-3xl text-2xl tracking-tight font-bold uppercase countdown">
            {countdown}
          </h1>
        </div>
      )}
    </div>
  )
}

export default MegaSales
