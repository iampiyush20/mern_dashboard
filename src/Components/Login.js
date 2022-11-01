import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Nav from './Nav';
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
 const [data,setData]=useState({
  email:"",
  password:""
 });
  // console.log(email,password);
const logsub= async()=>{

  const res=await axios.post('https://tame-shoulder-pads-ant.cyclic.app/api/login',data)

  try{
    console.log(res.data.status);
    if(res.data.status==='Invalid credentials'){
      $(".before").css('display','block');
      $("#error").css('display','block');
   
  
    }else{
      alert('logged in')
      $(".before").css('display','none');
      $(".after").css('display','block');
      $("#error").css('display','none');
       
    sessionStorage.setItem('status','login')
    navigate('/home')
    }
  }catch(e){
    $(".after").css('display','block');

  }
//  
}
const logsuuu=(e)=>{

  e.preventDefault();

}

  return (
   <>
  
  {/* <div className="product">
   <h1 className="datacls">connect to peoples</h1>
 <form onSubmit={logsuuu}>
 <input id="detai" className="productts" type="email" placeholder="enter email" value={email} onChange={(e)=>setemail(e.target.value)}/>
  <input id="detai"  className="productts" type="password" placeholder="enter password" value={password} onChange={(e)=>setpassword(e.target.value)}/>

  <button  onClick={logsub} className="prodbtn" type="button">Login</button>

 </form>
  </div> */}
  <div className="container ">
      <form className=" mx-auto mt-5 form_container rounded" onSubmit={logsuuu}> 
       
  <div className="mb-3">
    <input type="email" className="form-control" placeholder="enter email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
   </div>
  <div className="mb-3">
    <input type="password"  className="form-control" placeholder="enter passowrd" id="exampleInputPassword1" value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
  </div>
 <b className="text-danger" id="error">invalid crediatial</b>
  <button onClick={logsub} type="submit" className="btn">Login</button>
</form>
      </div>

   </>
  )
}

export default Login