import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/Navigation/NavigationItems/NavigationItem/NavigationItem.js';

const navigationItems =() => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" >Burger Builder</NavigationItem>
        <NavigationItem link ="/">Checkout</NavigationItem>
    </ul>

);

export default navigationItems;