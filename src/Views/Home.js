import React from 'react';
import { CartState } from '../context/Context';
import Filters from '../Components/Filter';
import SingleProduct from '../Components/SingleProduct';



const Home = () => {
  const { 
    state: { products },
  } = CartState();
  console.log(products);
  return ( 
    <div className='home'>
      <Filters/>
      <div className='productContainer'>
        {products.map((prod) => {
          return < SingleProduct prod={prod} key={prod.id} />
        })}
      </div>
    </div>
  );
  
};

export default Home;
