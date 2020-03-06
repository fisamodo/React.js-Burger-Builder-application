import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import BuildControls from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/Burger/BuildControls/BuildControls.js'
import Burger from 'C:/Users/Korisnik/Desktop/BurgerBuilder/burger-basics--01-after-eject-and-css-modules/src/components/Burger/Burger.js'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGRIDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component{
    state={
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese:0 ,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false
        
    }

    updatePurchaseState (ingridients) {
        
        const sum = Object.keys(ingridients)
        .map(igKey=>{
            return ingridients[igKey]
        })
        .reduce((sum, el)=>{
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0});
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount+1;
        const updatedIngridients = {
    ...this.state.ingridients
    };
    updatedIngridients[type] = updatedCount;
    const priceAddition = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingridients: updatedIngridients})
    this.updatePurchaseState(updatedIngridients);
}


    removeIngridientHandler =(type) => {
        const oldCount = this.state.ingridients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngridients = {
    ...this.state.ingridients
    };
    updatedIngridients[type] = updatedCount;
    const priceDeduction = INGRIDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({totalPrice: newPrice, ingridients: updatedIngridients})
    this.updatePurchaseState(updatedIngridients);

}

    purchaseHandle=()=>{
        this.setState({purchasing:true});
    }

    purchaseCancelHandler=()=>{
        this.setState({purchasing:false});
    }
    purchaseContinueHandler = ()=>{
        alert('You continue!');
    }
    render(){
        const disabledInfo = {
            ...this.state.ingridients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0

        }
        // makes {salad:true, meat:false.....}
        return(

            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                     price ={this.state.totalPrice}
                     ingridients={this.state.ingridients}
                     purchaseCancelled ={this.purchaseCancelHandler}
                     purchaseContinued ={this.purchaseContinueHandler}

                     />
                </Modal>
                <Burger ingridients={this.state.ingridients}/>
                <BuildControls
                     ingridientAdded={this.addIngridientHandler}
                     ingridientRemoved={this.removeIngridientHandler}        
                     disabled={disabledInfo}
                     purchasable={this.state.purchasable}
                     ordered={this.purchaseHandle}
                     price={this.state.totalPrice}
                      />
           </Aux>
        );
    }
}

export default BurgerBuilder;