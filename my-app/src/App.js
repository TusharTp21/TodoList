import logo from './logo.svg';
import './App.css';
import React,{useState} from "react"
import { func } from 'prop-types';
import Todoitem from './Todoitem';

function App() {
  
  const[inputlist,setinputlist]= useState("")
  const [items, setitems] = useState([])

  const itemEvent= (event)=>{
        setinputlist(event.target.value)
  }
  const listofitems=()=>{
    setitems((olditems)=>{
      return [...olditems,inputlist];
    })
    setinputlist("")
  }
  const deleteitem=(id)=>{
    console.log("yo");
    setitems((olditems)=>{
    return olditems.filter((arrele, index)=>{
      return index !== id;
    });
  });
};


  
  return (
    <>
    
      
    <div className="main_div">
      <div className="center_div">
        <br/><h1>ToDo List</h1><br/>
        <input type="text" placeholder='Add Items' value={inputlist} onChange={itemEvent}/>
        <button onClick={listofitems}>+</button>
        <ol>
        {items.map((itemval, index)=>{
            return <Todoitem
            key={index}
            id={index}
            test={itemval}
            onSelect={deleteitem}/>;
          })}
            
        </ol>
      </div>
    </div>
    </>
       

    
  );
}

export default App;
