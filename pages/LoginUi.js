import './resources/logincss/LoginUi.css';
import profile from "./../resources/loginimage/images.png";
import email from "./../resources/loginimage/email.jpg";
import pass from "./../resources/loginimage/pass.png";
function LoginUi() {
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
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="E-mail" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Password "  className="name"/>
           </div>
          <div className="login-button">
          <button type="submit">Login</button>
          </div>
           
            
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}

export default LoginUi;
