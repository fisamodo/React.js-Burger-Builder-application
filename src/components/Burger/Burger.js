import React from 'react';
import classes from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/Burger/Burger.css';
import BurgerIngridient from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/Burger/BurgerIngridient/BurgerIngridient.js'
const burger = (props) => {
    let transformedIngridients = Object.keys(props.ingridients)
    .map(igKey =>{
        return[...Array(props.ingridients[igKey])].map((_,i) =>{
        return<BurgerIngridient key ={igKey+i} type={igKey}/>;
        }); //Transforming an object of key value pairs into array of ingirdients//
    })
    .reduce((arr, el)=>{
        return arr.concat(el)
    },[]);
    if(transformedIngridients.length===0){
        transformedIngridients = <p>Please start adding ingridients</p>
    }
return(
    <div className={classes.Burger}>
        <BurgerIngridient type ="bread-top"/>
        {transformedIngridients}
        <BurgerIngridient type ="bread-bottom"/>

     
    </div>

);
};

export default burger;