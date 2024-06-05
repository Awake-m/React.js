import "./Todo.css"



function TodoList({data}){
    return(
        <div>
            {
            data.map((el)=>{
                return (<div className="b1">
                    <div className="box2">
                    <div className="h1">
                     <h1>{el.task} - {el.isComp ? "Added" : "Not Added"}</h1></div>
                     <div className="h2">
                     <button className="btn1">Edit</button>
                     <button className="btn1">Delete</button></div>
                     </div>
                </div>)
            })
           }
        </div>
    )
}

export default TodoList