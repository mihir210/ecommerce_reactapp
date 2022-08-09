import React from 'react';
import { Card, Button } from "react-bootstrap";


function Product() {
  return (
   <>
<div className='container-fluid mt-5 '>
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={require('../pictures/product_images/4.jfif')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../pictures/product_images/3r.jfif')} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={require('../pictures/product_images/2f.jfif')} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>



  
  <div className='gap-5 container mt-5'>
    
    <h1 className=' card-text mb-5'>Products</h1>
    
    <div className='row gap-5 '>
  
  <Card style={{ width: "18rem" }} className='column c_hover'>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/user/erondu/600x400"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some Custom text one can write here</Card.Text>
        <Button variant="primary" className='add_cart'>Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: "18rem" }} className='column c_hover'>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/user/erondu/600x400"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some Custom text one can write here</Card.Text>
        <Button variant="primary" className='add_cart'>Go somewhere</Button>
      </Card.Body>
    </Card>
    
    <Card style={{ width: "18rem" }} className='c_hover column'>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/user/erondu/600x400"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some Custom text one can write here</Card.Text>
        <Button variant="primary" className='add_cart'>Go somewhere</Button>
      </Card.Body>
    </Card>
    
    
    
    <Card style={{ width: "18rem" }} className='c_hover column'>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/user/erondu/600x400"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some Custom text one can write here</Card.Text>
        <Button variant="primary" className='add_cart'>Go somewhere</Button>
      </Card.Body>
    </Card>
    
    
    <Card style={{ width: "18rem" }} className='c_hover column'>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/user/erondu/600x400"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some Custom text one can write here</Card.Text>
        <Button variant="primary" className='add_cart'>Go somewhere</Button>
      </Card.Body>
    </Card>
    
    
    <Card style={{ width: "18rem" }} className='c_hover column'>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/user/erondu/600x400"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some Custom text one can write here</Card.Text>
        <Button variant="primary" className='add_cart'>Go somewhere</Button>
      </Card.Body>
    </Card>
    
    
    
    <Card style={{ width: "18rem" }} className='c_hover column'>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/user/erondu/600x400"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Some Custom text one can write here</Card.Text>
        <Button variant="primary" className='add_cart'>Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
  
   </>
  );
}

export default Product;
