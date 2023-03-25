// use local storage to manage card data,

const addToDb = id =>{
    let shoppingCard = {};

    //get the shopping card localStorage;
    const storedCard = localStorage.getItem('shopping-card');
    if(storedCard){
        shoppingCard = JSON.parse(storedCard)
    }
    else{
        shoppingCard = {};
    }

    //add quantity
    const quantity = shoppingCard[id];
    if(quantity){
        
        const newQuantity = quantity+1;
        shoppingCard[id] = newQuantity;                     
    
    }
    else{
        shoppingCard[id] = 1;
    }
    localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));
}



export {addToDb};