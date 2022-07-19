import React,{useState,useEffect} from 'react'
import axios from 'axios';
const Addproduct = () => {
  const [data,setData]=useState({
name:'',
price:"",
category:'',
company:''
  })
   const addthis =async(e)=>{
    e.preventDefault();
    
     alert('added');
   
      const res=await axios.post('https://xxxdash.herokuapp.com/api/addproduct',data);
      try{
        console.log(res.data);
      }catch(e){
        console.log(e);
      }
      console.log(data)
     
   }
  return (
    
 <>
{/* <div className="product">
<h1 className="datacls">Add Products</h1>
<form onSubmit={addthis}>
<input type="text" className="productts" placeholder="Name" name="name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
<input type="text" className="productts" placeholder="Price" name="price" value={data.price}  onChange={(e)=>setData({...data,price:e.target.value})}/>
<input type="text" className="productts" placeholder="Category" name="category" value={data.category}  onChange={(e)=>setData({...data,category:e.target.value})}/>
<input type="text" className="productts" placeholder="Company" name="company" value={data.company} onChange={(e)=>setData({...data,company:e.target.value})}/>
<button type='submit' className="prodbtn">Add</button>

</form>
</div> */}

<div className="container ">
      <form className=" mx-auto mt-5 form_container rounded" onSubmit={addthis}> 
       <div className="mb-3">
    <input type="text" className="form-control" placeholder="enter name" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
   </div>
   <div className="mb-3">
    <input type="number" className="form-control" placeholder="enter price" id="exampleInputEmail1" aria-describedby="emailHelp" name="price" value={data.price} onChange={(e)=>setData({...data,price:e.target.value})}/>
   </div>
   <div className="mb-3">
    <input type="text" className="form-control" placeholder="enter category" id="exampleInputEmail1" aria-describedby="emailHelp" name="category" value={data.category} onChange={(e)=>setData({...data,category:e.target.value})}/>
   </div>
   <div className="mb-3">
    <input type="text" className="form-control" placeholder="enter company" id="exampleInputEmail1" aria-describedby="emailHelp" name="company" value={data.company} onChange={(e)=>setData({...data,company:e.target.value})}/>
   </div>
 
 
  <button type="submit" className="btn">Add</button>
</form>
      </div>
 </>
  )
}

export default Addproduct