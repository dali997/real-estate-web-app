import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Input } from 'semantic-ui-react';
import { getProducts } from '../../JS/action/product';

export default function Search() {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.productReducer.products)
    useEffect(() => {
        dispatch(getProducts ())
    }, [])

    return (
        <div className='sea1'>
            <Input icon='search'
                placeholder='Search...'
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                {products.map((product) => {
                    return (
                        <Card>
                            <Card.Content className='sea2'>
                                <Card.Header>{product.name}</Card.Header>
                                <Card.Description>
                                    {product.price}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        </div>
    )
}