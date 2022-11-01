import React,{useEffect} from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Addproduct from './Components/Addproduct';
import Productlist from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';
import $, { data } from 'jquery';
import './App.css';
const App = () => {
useEffect(()=>{
  
  if(sessionStorage.getItem('status')==='login') {
    // document.getElementByClassName('before').style.display="none";
    // document.getElementByClassName('after').style.display="block";
   
    $(".after").css('display','block');
    $(".before").css('display','none');

      
      }
     else{
      // document.getElementByClassName('before').style.display="block";
      // document.getElementByClassName('after').style.display="none";
     
      $(".after").css('display','none');
      $(".before").css('display','block');
  
     }
      
},[])
  return (
    <>
    
   <BrowserRouter>
   <Nav />
  
   
      <Routes>
      <Route path="/home" element={<Productlist/>} />
    <Route path="/add" element={<Addproduct/>} />
    <Route path="/update/*" element={<UpdateProduct/>} />    
    <Route path="/profile" element={<h1>profile Component</h1>} />
    <Route path="/"  element={<SignUp/>} />
    <Route path="/logout"/>
    <Route path="/login" element={<Login/>} />
    </Routes>
   
   
    
  
  
   </BrowserRouter>
   
    </>
  )
}

export default App