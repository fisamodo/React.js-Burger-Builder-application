import React from 'react';
//import classes from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/Burger/BuildControls/BuildControls.css';
import classes from './BuildControls.css';
import BuildControl from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/Burger/BuildControls/BuildControl/BuildControl.js';
const controls = [
    {label: 'Salad', type:'salad'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},

];
const buildControls = (props) =>(
    <div className = {classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl
             key={ctrl.label} 
             label={ctrl.label}
             added = {() => props.ingridientAdded(ctrl.type)}
             removed={() => props.ingridientRemoved(ctrl.type)}
             disabeld={props.disabled[ctrl.type]}/>           
        ))}
        <button className={classes.OrderButton}
        disabled ={!props.purchasable}
        onClick={props.ordered}>ORDER NOW</button>
    </div>

);
export default buildControls;
