import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Axios from 'axios';
import ProductCard from '../Components/productCard'


function Admin() {

  // Read all the DB Items 

  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  useEffect(()=>{
    Axios.get('http://localhost:5000/api/clothes/')
    .then(res =>{
      let data = res.data;
      const productItem = data.map((item)=> <ProductCard key={item._id} Id={item._id} brand={item.brand} name={item.name} size={item.size}  price={item.price} />);
      setReadProducts(productItem);
      setRenderProducts(false);
    });
  }, [renderProducts]);


let defaultFormVals = ["brand", "name", "size", "price"];

const [formValues, setFormValues] = useState(defaultFormVals);

const getValues = (e) =>{
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}

const addProduct = (e) => {
    e.preventDefault();

    // var stock = +formValues['varOne'] + +formValues['varOne'] + +formValues['varThree'];

    let payload = {
        brand: formValues['brand'],
        name: formValues['name'],
        size: formValues['size'],
        price: formValues['price'],
  }

  Axios.post('http://localhost:5000/api/clothes/', payload)
  .then((res)=> {
    if(res){
      console.log("Item Added"); 
      setRenderProducts(true);
    }
  })
  .catch(function (error) {
    console.log(error);
  });

 }

  return (
    <div className="Addform">
      {/* <Grid container spacing={5}>
      <Grid item xs={8}>
        <h1>The FlipFlop Shop: Products</h1>
        <Grid container spacing={2}>
            {readProducts}
        </Grid>
      </Grid> */}
      <Grid item xs={4}>
        <h1 style={{color:'black'}}>Add A Product</h1>
        <form onSubmit={addProduct}>
            <TextField style={{color:'white'}} required name="brand" label="Product Brand" fullWidth margin="dense" onChange={getValues} />
            <TextField style={{color:'white'}} required name="name" label="Product Name" fullWidth margin="dense" onChange={getValues} />
            <TextField style={{color:'white'}} required name="size" label="Product Size" fullWidth margin="dense" onChange={getValues} />
            <TextField style={{color:'white'}} required name="price" label="Product Price" fullWidth margin="dense" onChange={getValues}/>
            <Button type="submit" style={{marginLeft: "2.5%", width: "52.4%", marginTop: "8px", height: "55px"}} variant="contained">Add New Product</Button>
        </form>
      </Grid>
    </div>
  );
}

export default Admin;
