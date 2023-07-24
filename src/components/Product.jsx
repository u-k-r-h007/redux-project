import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from './../store/productSlice';

const Product = () => {
  const dispatch=useDispatch()
  const {data:products,status}=useSelector(state=>state.products)

  useEffect(() => {
//dispatch an action for getProducts

dispatch(getProducts())


    // //api
    // const fetchData = async () => {
    //   const response = await fetch("https://fakestoreapi.com/products");
    //   const data = await response.json();
    //   setProducts(data); }
    // fetchData()
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
  }, []);

  if(status=== 'loading'){
    return <p>Loading......</p>
  }
  if(status=== 'error'){
    return <p>Something went Wrong</p>
  }
const addToCart = (product) =>{
  //dispatch an add action
dispatch(add(product))
}

  const cards = products.map(product => (
    <div className="col-md-3" style={{ marginBottom:"20px" }}>
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
        <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
