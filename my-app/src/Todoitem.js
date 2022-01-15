import React from "react";
function Todoitem(props){
    return(
       <div className="todo_style">
          < i className="fas fa-trash" 
          onClick={()=>{
              props.onSelect(props.id)
          }}/>


           <li>{props.test}</li>
           </div>
    )
}
export default Todoitem;