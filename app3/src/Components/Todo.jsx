import { useState } from "react"

import TodoList from "./TodoList"
import "./Todo.css"
function Todo(){

    let [arr,setArr] = useState([])
    const [work,setWork] = useState("")

    // const handleChange = (el)=>{
    //    setWork(el.target.value)
    // }
    
    const handleClick = ()=>{
        let obj = {
            task : work,
            isComp : true
        }
        setArr([...arr,obj])
    }

    return (
        <div className="main">
            <div className="box1"><br></br><br></br>
           <h1>Todo List</h1><br></br><br></br>
           <input type="text" onChange={(el)=>setWork(el.target.value)} placeholder="Enter Name" /><br></br><br></br>
           
           <button onClick={handleClick}>Submit</button><br></br>
           </div>
           <TodoList data={arr}/>
        </div>
    )
}

export default Todo