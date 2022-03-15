import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { editProduct, addProduct} from '../../JS/action/product';
import { Button,  Form } from 'semantic-ui-react'


function Edit  () {
    const dispatch= useDispatch()
    const productReducer = useSelector((state=> state.productReducer.product))
    const [product,setProduct]= useState({name:"", phone:"",description:"", price:"",productImg:""})
    const edit = useSelector((state)=> state.editReducer.edit)
    
    useEffect(()=>{
        edit ? setProduct(productReducer): setProduct({name:"", phone:"",description:"",price:"",productImg:""})
    },[productReducer, edit])

    const handleProduct =()=>{
      if (edit){
        dispatch(editProduct(productReducer._id, product))
        
      }else{
        dispatch (addProduct(product))
      }
        
    }

    const handleChange= (e)=>{
        e.preventDefault()
        setProduct({...product,[e.target.name]:e.target.value})
    }

  return(
    <Form className='forma'>
      
          <Form.Field >
      <label>Image : </label>
      <input type="text" placeholder='productImg' name ='productImg' value={product.productImg} onChange={handleChange}  />
    </Form.Field>
    <Form.Field >
      <label>Name : </label>
      <input type="text" placeholder='Name' name ='name' value={product.name} onChange={handleChange}  />
    </Form.Field>
    <Form.Field>
      <label>Description : </label>
      <input type="text" placeholder='description' name='description' value={product.description} onChange={handleChange}/>
    </Form.Field>
    <Form.Field>
     <label> Owner Phone : </label>
      <input type= "text" placeholder='Phone Number' name= 'phone' value={product.phone} onChange={handleChange} />
    </Form.Field>
    <Form.Field>
     <label> Price : </label>
      <input type= "textarea" placeholder='Product Price' name= 'price' value={product.price} onChange={handleChange} />
    </Form.Field>
    <Link to="/products" >
    <Button type='submit' onClick={handleProduct}>{!edit? "Save" :"Edit"}</Button>
    </Link>
  </Form>
  )
};

export default Edit;
