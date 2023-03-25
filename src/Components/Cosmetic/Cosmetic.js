import React from 'react';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price, id} =props.cosmetic;
    const addToCard =(id)=>{
        console.log('item added', id)
    }

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
            <button onClick={()=>addToCard(id)}>Add to Card</button>
        </div>
    );
};

export default Cosmetic;