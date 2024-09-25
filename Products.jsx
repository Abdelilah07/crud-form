import { useEffect, useState, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Products() {

    const handleProducts = (productsState, action) => {
        switch (action.type) {
            case 'loadProducts':
                return action.payload;
            case 'deleteProduct':
                return productsState.filter((product) => product.id !== action.payload);
            default:
                return productsState;
        }
    }

    const [productsState, dispatch] = useReducer(handleProducts, []);

    useEffect(() => {
        (async () => {
            const { faker } = await import('@faker-js/faker');
            dispatch({type: 'loadProducts', payload: [...Array(10)].map(() => ({
                id: uuid(),
                name: faker.commerce.productName(),
                price: faker.commerce.price(),
                image: 'https://picsum.photos/200',
            }))});
        })();

    }, []);
    return (
        <div className='products container d-flex flex-wrap gap-2 mt-5'>
            {productsState.map((product) => (
            <Card key={product.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Button variant="primary" className='me-2'>Buy</Button>
                    <Button variant="danger"
                            onClick={() => dispatch({type: 'deleteProduct', payload: product.id})}
                            >Delete
                    </Button>
                </Card.Body>
            </Card> ))
            }
        </div>
    );
}

export default Products
