import React,{useEffect,useState} from 'react';
import Updaproduct from './UpdateProduct';

import { useNavigate } from 'react-router-dom';

import axios from 'axios';
const ProductList = () => {
    
  const navigate=useNavigate();
const [products,setproducts]=useState([]);
const getpro=async()=>{
    const showpro=await axios.get('https://xxxdash.herokuapp.com/api/products');

    setproducts(showpro.data);
}
useEffect(()=>{
    getpro();
},[]);

console.log(products);

const deleteproduct=async(id)=>{
console.log(id);
const dele=await axios.delete(`https://xxxdash.herokuapp.com/api/products/${id}`);
if(dele){
    getpro();
}
}
const updateprooduct=async(id)=>{

    const updtt=await axios.get(`https://xxxdash.herokuapp.com/api/products/${id}`);
    // console.log(updtt.data);
    navigate(`/update/${id}`);
//  document.getElementById('dataname').value=updtt.data.name;
}

  return (
    <>
<div className="product-list ">
    <h3 className="text-center">
        Products
    </h3>
    {/* <ul >
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>company</li>
        <li>operation</li>
    </ul> */}
    <table className="table w-75 mx-auto">
   <thead>
   <tr>
        <th scope="col">S.no</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Category</th>
        <th scope="col">company</th>
        <th scope="col">operation</th>
    </tr>
   </thead>
   <tbody>
   {
    products.map((item,index)=>
    <tr key={item._id}>
        <td>{index}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.category}</td>
        <td>{item.company}</td>
        <td>
        <button className="btn" id="btnnn" onClick={()=>deleteproduct(item._id)}><i class="bi bi-trash"></i></button>
        <button className="btn"  id="btnnn"  onClick={()=>updateprooduct(item._id)}><i class="bi bi-pencil-square"></i></button>
        </td>
    </tr>
    )
   
 }
   </tbody>
</table>
 
</div>
    </>
  )
}

export default ProductList