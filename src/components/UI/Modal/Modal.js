import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/UI/Backdrop/Backdrop.js';

const modal =(props) =>(
    <Aux>
        <Backdrop show={props.show} clicked = {props.modalClosed}/>
    <div
         className={classes.Modal}
         style={{
             transform: props.show ? 'translateY(0)':'translateY(-100vh)',
             opacity: props.show ? '1':'0'
         }}>
        {props.children}
    </div>
    </Aux>
);


export default modal;