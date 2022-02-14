import './../resources/logincss/LoginUi.css';
import profile from "./../resources/loginimage/images.png";
import emaili from "./../resources/loginimage/email.jpg";
import pass from "./../resources/loginimage/pass.png";
import { useEffect, useState } from 'react';


function LoginUi() {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
 
  async function login()
  {
    console.warn(email,password)
    let item={email,password};
    let result=await fetch("http://127.0.0.1:8000/api/login",{
      method:'POST',
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    });
    result=await result.json();
    localStorage.setItem("user-info",JSON.stringify(result))
    
    
  }
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={emaili} alt="email" className="email"/>
             <input type="text" placeholder="E-mail"
              onChange={(e)=>setEmail(e.target.value)} className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password "
             onChange={(e)=>setPassword(e.target.value)}  className="name"/>
           </div>
          <div className="login-button">
          <button onClick={login} type="submit">Login</button>
          </div>
           
            
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;
