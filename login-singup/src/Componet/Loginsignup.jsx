import { useState } from "react"
import Swal from 'sweetalert2';
import "./Loginsignup.css"


function Loginsignup(){

    const [state,setState] = useState("Signup")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loginEmail,setLEmail] = useState("")
    const [loginpass,setLoginpass] = useState("")
    const [arr,setArr] = useState([])
    
     const handleClick= ()=>{
         let obj = {
             username : name,
             email : email,
             pass : password
         }
         setArr([...arr,obj])
 
     }
     const handleLoginClick =()=>{
         let data = arr.filter((el)=>{
             return el.email == loginEmail && el.pass == loginpass})
             console.log(data)
         if(data.length>0){
            Swal.fire({
                title: "Login Succesfully...",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
         }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="#">Why do I have this issue?</a>'
              });
         }
     }
 
     return (
         <div>
           { state=="Signup" ?  <div className="signup">
             <h1>Signup</h1><br /> <br />
              <input type="text" placeholder="User Name" onChange={(d)=>setName(d.target.value)} /><br /> <br />
              <input type="email" placeholder="Enter Email" onChange={(d)=>setEmail(d.target.value)}/><br /> <br />
              <input type="text" placeholder="Enter Password" onChange={(d)=>setPassword(d.target.value)}/><br /> <br />
              <button onClick={handleClick}>Singup</button><br /> <br />
              <p onClick={()=>setState("Login")}>Already an account ? Login</p>
           </div> : <div className="login">
             <h1>Login</h1><br /> <br />
             <input type="text" placeholder="Enter Email" onChange={(e)=>setLEmail(e.target.value)} /> <br /><br />
             <input type="text" placeholder="Enter Password" onChange={(e)=>setLoginpass(e.target.value)} /> <br /><br />
             <button onClick={handleLoginClick}>Login</button><br /> <br />
             <p onClick={()=>setState("Signup")}>Create an account</p>
             
             </div>}
         </div>
     )
 }
 



export default Loginsignup