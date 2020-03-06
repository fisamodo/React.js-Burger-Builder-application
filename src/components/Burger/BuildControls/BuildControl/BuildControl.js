import React from 'react';
import classes from './BuildControl.css';
//import classes from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/Burger/BuildControls/BuildControl/BuildControl.css';
const buildControl =(props) =>(
    <div className={classes.buildControl}>
         <div className={classes.label}>{props.label}</div>
         <button 
         className ={classes.Less}
          onClick={props.removed} disabled = {props.disabled}>Less</button>
         <button 
         className={classes.More}
          onClick={props.added}>More</button>

    </div>
);
export default buildControl;