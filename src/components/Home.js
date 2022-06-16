import React from 'react'
import { useNavigate } from 'react-router-dom'

/*The useNavigate hook returns a function that lets you navigate 
programmatically, for example after a form is submitted. */

export const Home = () => {
  const navigate = useNavigate()
  return (<>
    <div>Home Page</div>
    <button onClick={() => navigate('order-summary', { replace: true })}>Place order</button>
    </>
  )
}
