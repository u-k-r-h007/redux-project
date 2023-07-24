import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from '../store/cartSlice';

const Cart = () => {
  const dispatch=useDispatch()
 
  const productCart=useSelector(state=>state.cart)

  const RemoveFromCart = (id) =>{
    //dispatch an add action
  dispatch(remove(id))
  }

  const cards = productCart.map(product => (
    <div className="col-md-12" style={{ marginBottom:"20px" }}>
      <Card key={product.id} className="h-100" >
        <div className="text-center" >
        <Card.Img variant="top" src={product.image}  style={{ width: "150px",height:"130px" }}/>
        </div>
       
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
            <h2>₹{product.price}</h2>
          </Card.Text>
         
        </Card.Body>
        <Card.Footer style={{ background:"white" }}>
        <Button variant="danger" onClick={()=>RemoveFromCart(product.id) }>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  
  return (
    <div className="row">
      {cards}
    </div>
  )
}

export default Cart
