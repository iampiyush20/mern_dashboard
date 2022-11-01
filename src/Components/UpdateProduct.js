import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { get } from 'jquery';
// import { set } from 'mongoose';
const UpdateProduct = () => {
  const navigate=useNavigate();
  let { userId } = useParams();
  // console.log(userId);
    const [data,setData]=useState({
        name:"",
        price:"",
        category:"",
        company:""
    });

    const updateproduct=async(id)=>{
      id.preventDefault();
      alert('updated');
      let userId=window.location.pathname;
      console.log(userId);
      let nid=userId.split('/');
      console.log(nid);
      let uid=nid[nid.length-1]
     console.log('id is '+ uid);
     const uprodu=await axios.patch(`https://tame-shoulder-pads-ant.cyclic.app/api/upproducts/${uid}`,data);
     console.log(uprodu.data);
     navigate('/home')
    }
    const getp=async(id)=>{
      
     let userId=window.location.pathname;
     console.log(userId);
     let nid=userId.split('/');
     console.log(nid);
     let uid=nid[nid.length-1]
    console.log(uid);
      const updtt=await axios.get(`https://tame-shoulder-pads-ant.cyclic.app/api/products/${uid}`);
      console.log(updtt.data);
     setData({
      name:updtt.data.name,
      price:updtt.data.price,
      category:updtt.data.category,
      company:updtt.data.company,
     })
  }
useEffect(()=>{
getp();

},[]);
  return (

    <>
        {/* <div className="product">
<h1 className="datacls">update Products</h1>
<form onSubmit={updateproduct}>
<input type="text"  className="productts" placeholder="enter product name" name="name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
<input type="text"   className="productts" placeholder="enter product price" name="price" value={data.price}  onChange={(e)=>setData({...data,price:e.target.value})}/>
<input type="text"   className="productts" placeholder="enter product category" name="category" value={data.category}  onChange={(e)=>setData({...data,category:e.target.value})}/>
<input type="text"  className="productts" placeholder="enter product company" name="company" value={data.company} onChange={(e)=>setData({...data,company:e.target.value})}/>
<button type='submit'  className="prodbtn">update</button>

</form>
</div> */}
<div className="container ">
      <form className=" mx-auto mt-5 form_container rounded" onSubmit={updateproduct}> 
      
<h1 className="text-center">update Products</h1>
       <div className="mb-3">
    <input type="text" className="form-control" placeholder="enter product name" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
   </div>
  <div className="mb-3">
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter product price" name="price" value={data.price}  onChange={(e)=>setData({...data,price:e.target.value})}/>
   </div>
   <div className="mb-3">
    <input type="text" className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter product category" name="category" value={data.category}  onChange={(e)=>setData({...data,category:e.target.value})}/>
   </div>
  <div className="mb-3">
    <input type="text"  className="form-control" id="exampleInputPassword1" placeholder="enter product company" name="company" value={data.company} onChange={(e)=>setData({...data,company:e.target.value})}/>
  </div>
 
  <button type="submit" className="btn">update</button>
</form>
      </div>
    </>
  )
}

export default UpdateProduct