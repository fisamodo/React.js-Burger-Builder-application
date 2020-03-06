import React from 'react';
import Button from '../../UI/Button/Button';
import Aux from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/hoc/Auxiliary.js';


const orderSummary = (props) =>{
    const ingridientSummary = Object.keys(props.ingridients)
    .map(igKey=>{
        return (<li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingridients[igKey]}
            </li>);
    });
    
    return(
        <Aux>
            <h3>Your order</h3>
            <p>A delicous burger with the following ingredients:</p>
            <ul>
            {ingridientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType ="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button bntType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>

        </Aux>
    )
};
export default orderSummary;