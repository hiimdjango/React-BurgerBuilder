import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    //Transform the object into an array of key then map through it and return an Empty Array
    //It's length is the value of the ingredient itself and map through it and return the BurgerIngredient component.
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredient key = {igKey + i} type = {igKey} />
        })
    })
    //Concat the multiple arrays into one array of objects
    .reduce((arr,el) => {
        return arr.concat(el);
    },[]);

    if(transformedIngredients.length === 0 ) {
        transformedIngredients = <p>You can start adding ingredients!</p>
    }
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;