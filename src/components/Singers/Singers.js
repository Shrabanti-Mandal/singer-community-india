import React, { useEffect, useState } from 'react';
import './Singers.css';
import Singer from '../singer/Singer';
import Cart from '../cart/Cart';

const Singers = () => {
   const [singers,setSingers]=useState([]);
    const [cart,setCart]=useState([]);

//fetch data from singers.json 
   useEffect(()=>{
       fetch('./singers.json')
       .then(res=>res.json())
       .then(data=>setSingers(data))
   },[])
//add to cart
const handleVoteForWinning=(singer)=>{
  
    const newcart=[...cart];
    const found=cart.find((carts)=>carts.serialNo===singer.serialNo)
    if(!found){
        newcart.push(singer)
    }
    setCart(newcart);

}

    return (
        <div className="singers-container">


        <div className="singer-container">
       

        {
                singers.map(singer=><Singer 
                key={singer.id}
                singer={singer}
                handleVoteForWinning={handleVoteForWinning}
                ></Singer>)
            }

        </div>

        <div className="vote-container">
        <Cart cart={cart}></Cart>
        </div>


           
        </div>
    );
};

export default Singers;