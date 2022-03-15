import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../JS/action/product';
import Product from './Product';
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';



export const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.productReducer.products)
    const loadProducts =  useSelector((state)=>state.productReducer.loadProducts);

useEffect(()=>{
    dispatch(getProducts ())
}, [])

  return (
    <div className='forma2'>
          
        <Link to='/'>
        <Button content='Home'  basic   className='HomeButton' />
        </Link> 
    
        <br/>
        <hr/>
        <div>
      </div>
        {loadProducts? (<h3>loading ...</h3>)
        :products.length===0? (<h3>there are no products</h3>)
        :(products.map((el)=>  <Product key={el._id} product={el}/>))
    }

    </div>

);
};
