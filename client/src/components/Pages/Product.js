import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { deleteProduct, getProduct } from '../../JS/action/product'
import {useDispatch,useSelector} from "react-redux"
import { toggleTrue } from '../../JS/action/edit';

import { Link } from 'react-router-dom';
  const Product = ({product}) => {
  const user = useSelector((state)=>state.authReducer.user);
  
  const dispatch= useDispatch();
  const isAuth = useSelector((state)=>state.authReducer.isAuth);
  console.log(user)
  
  return (
    
    <div className='onh'>
      
    <Card    key={product._id}>
      <Card.Content    >
        <Card.Header > <img className='productimg' src={product.productImg}  alt="product"/> </Card.Header>
        <hr/>
        <Card.Header>{product.name}</Card.Header>
        <Card.Meta>{product.description}</Card.Meta>
        
        <Card.Description>
          Phone Number:  <strong>{product.phone}</strong>
        </Card.Description>
        <Card.Description>
          price:  <strong>{product.price}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='btn2'>
         
          {isAuth && user.role === 1 ? (<Link to= {`/edit/${product._id}`} >
          <Button basic color='blue' onClick={()=>{dispatch(toggleTrue()); dispatch(getProduct(product._id))}}>
            Edit
          </Button>
          </Link>):(<></>)}

          <hr/>
          <Link to="/contact"> <Button basic color='green'> CONTACT OWNER  </Button></Link>
          <hr/>
          {isAuth && user.role === 1 ? (<Button basic color='red' onClick={()=>dispatch(deleteProduct(product._id))}>
            Delete
          </Button>):(<></>)}
          
        </div>
      </Card.Content>
    </Card>
    </div>
  )}
    

export default Product;

