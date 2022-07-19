import React from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
const Nav=()=>{
    const navigate=useNavigate();
    const x=localStorage.getItem('auth')
 console.log(x);

   


const logouts=()=>{
    sessionStorage.setItem('status','out');
    navigate('/');
    $(".before").css('display','block');
    $(".after").css('display','none');
    // document.getElementByClassName('before').style.display="block";
    // document.getElementByClassName('after').style.display="none";

   
   
  
    // $("#pro").css('display', 'none');
}
    return(
        <>
    
        <ul className="nav-ul">
    <li className="after"><Link to="/home">products</Link></li>
    <li className="after"><Link to="/add"> add products</Link></li>
    {/* <li id="upd"><Link to="/update">update products</Link></li>  */}
    {/* <li id="pro"><Link to="/profile">profile</Link></li> */}
    <li className="after" onClick={logouts}><Link to="/logout"><i class="bi bi-box-arrow-right"></i></Link></li>
   <li className="before" ><Link to="/">signup</Link></li>
<li className="before" ><Link to="/login">login</Link></li>

 
    </ul>


    

        </>
    )
}
export default Nav