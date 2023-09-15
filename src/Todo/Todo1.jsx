import React, { useEffect, useState } from 'react'
import './todo.css'; 
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
const Todo1 = () => {
  const [todoinput, updateInput] = useState('');
  
  const [showAll, setShowAll] = useState(true);
  useEffect( ()=>{  fetchTodo();},[]);
  const fetchTodo =  ()=>{
  axios.get('https://jsonplaceholder.typicode.com/users/1/todos/')
  .then((res)=>{
        console.log(res.data);
        setTodos(res.data);
   })
  }
  const [todos, setTodos] = useState(
    [
      { 
        id : 21,
        title : 'Learning React',
        completed : true
      }
    ]
  );
  let nextId = 21;

  const todoAdd = ()=>{
      if(todoinput === ""){
        alert('write something');
        return 
      }
      else
      {
         const newDos = [
            ...todos, 
          {
             id: nextId++,
             title: todoinput,
             completed: false
          }
        ]
        setTodos(newDos);
        updateInput(" ");
      }
  }
  const deleteTodo =(id)=>{

  const newArray = todos.filter((todo) => todo.id !== id);
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i].id !== i + 1) {
      newArray[i].id = i + 1;
    }
  }
  setTodos(newArray);
  }
  const editTodo = (tid, newTask)=>{
      const newDos = todos.map((todo)=>
      todo.id===tid?{...todo,title:newTask}:todo);
      setTodos(newDos)
  } 
  const showall = () => {
    setShowAll(true);
  };

  const showCompleted = () => {
    setShowAll(false);
  };

  const filteredTodos = showAll ? todos : todos.filter((todo) => todo.completed);

  
  return (
    <div>
       <h1 id='todoHeading'>Todo list</h1>
       <div className='btnGrp'>
        <button
          className="btn btn-primary"
          type="button"
          onClick={showall}
        >
          Show All Tasks
        </button> &nbsp; &nbsp; &nbsp;
        <button
          className="btn btn-primary"
          type="button"
          onClick={showCompleted}
        >
          Show Completed Tasks
        </button>
      </div>
       <div id='tableContainer'>
       <div class="input-group mb-3">
      <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
         onChange={(e)=>
          {
             let task = e.target.value;
             console.log(task);
             updateInput(task)
          }}
             value={todoinput}
       /> &nbsp;&nbsp;
      <div class="d-grid gap-2 d-md-block">
      <button class="btn btn-primary" type="button" 
        onClick={()=>{
          todoAdd();
          }}
      >Add</button>
      </div>
      </div> 
      
      <Table striped bordered hover variant='light'>
        <tbody>
        { filteredTodos.length>0 ?
        (
          filteredTodos.map(
            ({id, title, completed})=>(
             
            <tr key={id}>  
              <td>{id}</td>
              <td>{title}</td>
              <td>{ completed ?<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>:
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                            
                            }
              </td>
              <td><button class="btn btn-secondary" type="button" 
              onClick={()=>{ const task = window.prompt("");
               {
                editTodo(id,task);
              }}}
              > 
                edit</button> </td>
              <td><button class="btn" type="button" onClick={()=>{deleteTodo(id)}}  >✖</button> </td>
            </tr>
          ))
        ): (<tr>
            <td colSpan={2} style={{textAlign: "center"}}>
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </td>
            </tr>) }
  
        </tbody>
      </Table>
      </div>
      
    
    

    
            
    </div>
  )
}
export default Todo1