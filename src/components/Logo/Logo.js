import React from 'react';
import burgerLogo from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/assets/images/original.png'
import classes from './Logo.css';
const logo =(props) =>(
    <div className ={classes.Logo} style ={{height:props.height}}>
        <img src ={burgerLogo}  alt ="MyBurger"/>
    </div>

);

export default logo;