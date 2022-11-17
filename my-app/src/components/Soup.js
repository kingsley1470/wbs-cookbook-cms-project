import React from 'react';
import {NavLink, Routes,Route} from 'react-router-dom'
import FullRecipe from './FullRecipe';

function Soup({articles}) {
  return (
    <div className='heading-section'>
    <h1>soup recipes</h1>
    <div className='grid-section'>
        <div ><NavLink to='/soups/lentil-soup' ><img src={require('../images/lentil-soup.webp')} alt='lentil-soup' />
            <p>Lentil Soup</p></NavLink>
        </div>
        <div><NavLink to='/soups/mushroom-soup' ><img src={require('../images/mushroom-soup.webp')} alt='mushroom-soup' />
            <p>Mushroom Soup</p></NavLink> </div>
            
        <div><NavLink to='/soups/cauliflower-soup' ><img src={require('../images/cauliflower-soup.webp')} alt='cauliflower-soup' />
            <p>Cauliflower Soup</p></NavLink></div>
         
            <div><NavLink to='/soups/companion' ><img src={require('../images/fish_soup.png')} alt='fish_soup' />
            <p>Fish Soup</p></NavLink></div>
            
      
    </div>

    <Routes >
        <Route path='/:recipe' element={<FullRecipe articles={articles} />} />
       
    </Routes>
</div>
  )
}

export default Soup
