import React, { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalQuantities(0)
    setTotalPrice(0)
  }, [setCartItems, setTotalQuantities, setTotalPrice])

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for your receipt</p>
        <p className="description">
          if you have any questions, please email
          <a className="email" href="mailto:snaggs.kashir@gmail.com">
            snaggs.kashir@gmail.com
          </a>
        </p>
        <Link href="/">
          <a>
            <button type="button" width="300px" className="btn">
              Continue Shopping
            </button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Success
