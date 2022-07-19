import React,{useState} from 'react'
import Nav from './Nav';
import $, { data } from 'jquery';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate=useNavigate();
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  });
// if((document.getElementById('inbo').value) !==''){
//   document.getElementById('hom').style.display="block";
//   document.getElementById('adp').style.display="block";
//   document.getElementById('upd').style.display="block";
//   document.getElementById('pro').style.display="block";
//   document.getElementById('log').style.display="block";
                
  
//   document.getElementById('sign').style.display="none";
//   document.getElementById('logii').style.display="none";
//   navigate('/profile');
// }
// else{
//   document.getElementById('hom').style.display="none";
// document.getElementById('adp').style.display="none";
// document.getElementById('upd').style.display="none";
// document.getElementById('pro').style.display="none";
// document.getElementById('log').style.display="none";
              

// document.getElementById('sign').style.display="block";
// document.getElementById('logii').style.display="block";
// navigate('/');
// }


  
  const summm=async(e)=>{
    e.preventDefault();
    console.log(data)
   const regis=await axios.post('/api/register',data);
   try{
   if(regis.data.status==='already exist'){
    alert('data exits')
   
    $(".before").css('display','block');
    $(".after").css('display','none');

    sessionStorage.setItem('status','outt')
   }
   else{
    alert('loged in');
    $(".before").css('display','none');
    $(".after").css('display','block');
    // document.getElementByClassName('before').style.display="none";
    // document.getElementByClassName('after').style.display="block";
   
    sessionStorage.setItem('status','login')
    navigate('/home')
   }
console.log(regis.data);
   }catch(e){
   
console.log(e);
   }

  }
 
  return (
    <>
       
       {/* <div className="form_register">
       <h1 className="datacls">register</h1>
       <form >
        <input id="inbo" className="productts" type="text" placeholder="enter name" name="name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
        <input id="inbo" className="productts" type="email" placeholder="enter email" name="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
        <input id="inbo" className="productts" type="password" placeholder="enter password"  name="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
        <button   type="submit" className="prodbtn" >signup</button>
        </form>
       </div> */}
      <div className="container ">
      <form className=" mx-auto mt-5 form_container rounded form_back" onSubmit={summm}> 
       <div className="mb-3">
    <input type="text" className="form-control" placeholder="enter name" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
   </div>
  <div className="mb-3">
    <input type="email" className="form-control" placeholder="enter email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
   </div>
  <div className="mb-3">
    <input type="password"  className="form-control" placeholder="enter password" id="exampleInputPassword1" name="password" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
  </div>
 
  <button type="submit" className="btn">signup</button>
</form>
      </div>
        </>
  )
  }

export default SignUp