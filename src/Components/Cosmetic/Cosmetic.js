import React from 'react';
import { addToDb } from '../../Utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} =props.cosmetic;

    //add card function
    const addToCard =(id)=>{
      addToDb(id)    
    }

    //remove card function
    
    // system-1
    // const addToCardPara = () =>{
    //     addToCart(id)
    //<button onClick={addToCardpara}>Add to Card1</button>
    // }
    return (
        <div className='product'>
            <h3>Buy this: {name}</h3>
            <p>Only for: $ {price}</p>
            <p><small>It has id: {id}</small></p>
            <button onClick={()=>addToCard(id)} style={{marginRight:'10px'}}>Add to Card</button>
            <button onClick={()=>removeFromCard(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;