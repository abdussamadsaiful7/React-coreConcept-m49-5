
import React, { useEffect, useState } from 'react';
import { getTotal } from '../../Utilities/Calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css'
// import { add } from '../../Utilities/Calculate';
//import add from '../../Utilities/Calculate';

const Cosmetics = () => {
    // const first = 55;
    // const second = 66;
    // const total = add(first, second);
    const [cosmetics, setCosmetics] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setCosmetics(data))
    },[])

    const total = getTotal(cosmetics);

    return (
        <div>
            <h1>Welcome to my  Cosmetics Store</h1>
            <p>Money needed: {total}</p>
            <div className='products'>
                 {
                     cosmetics.map(cosmetic =><Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
                 }
            </div>
            
        </div>
    );
};

export default Cosmetics;