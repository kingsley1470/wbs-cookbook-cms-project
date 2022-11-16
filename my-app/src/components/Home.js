import React from 'react'
import './styles.css'
import CookingBubble from './CookingBubble';

function Home() {
  return (
    <div className='home-header'> 
     <h3>Let's Start !!!</h3>
    <div className='home-section'>
      <CookingBubble />
    </div>
    </div>
  )
}

export default Home
