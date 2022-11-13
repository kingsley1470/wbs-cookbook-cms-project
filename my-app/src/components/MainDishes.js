import React from 'react'
import "./styles.css"
import { NavLink, Routes, Route, useParams } from 'react-router-dom'
import FullRecipe from './FullRecipe'


function MainDishes({ articles }) {
    return (
        <div className='heading-section'>
            <h1>main courses </h1>
            <div className='grid-section'>

                <div ><NavLink to='/mainDishes/Spaghetti' ><img src={require('../images/spaghetti.webp')} alt='spaghetti' />
                    <p>Spaghetti</p></NavLink>
                </div>
                <div><NavLink to='/mainDishes/lasagne' ><img src={require('../images/lasagne.webp')} alt='lasagne' />
                    <p>Lasagne</p></NavLink> </div>
                <div><NavLink to='/mainDishes/stroganoff' ><img src={require('../images/beef-stroganoff.webp')} alt='smoothie' />
                    <p>stroganoff</p> </NavLink></div>
                <div><NavLink to='/mainDishes/turkey' ><img src={require('../images/Maple-glazed_turkey.png')} alt='smoothie' />
                    <p>Maple Glazed Turkey</p> </NavLink></div>
                    <div><NavLink to='/mainDishes/pesto' ><img src={require('../images/Cheese_Pesto_Lasagna.png')} alt='smoothie' />
                    <p>Cheese Pesto Lasagna</p> </NavLink></div>

            </div>
        </div>
    )
}

export default MainDishes
