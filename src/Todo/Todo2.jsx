import React, { useEffect, useState } from 'react'
import './todo.css'; 
import axios from 'axios';
// import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo2 = () => {
  const [todoinput, updateInput] = useState('');
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
    const array = [...todos]
    console.log(array);
    for(let i=0; i<array.length;i++){
      console.log(i);
          if(i===id-1)
          {
            array.splice(i,1);
            setTodos(array);
          }
    }
  }
  
  return (
    <div>
       <h1 id='todoHeading'>Todo list</h1>
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
        <ul className='list-group mt4'></ul>
        { todos.length>0 ?
        (
          todos.map(
            (todo)=>{
              return(
                <li className='list-group-item' style={{display:'flex'}} >
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>
                      <span>{ todo.completed ? 
                           <button class="btn" type="button" >✔</button>   : 
                            <button class="btn" type="button" >❌</button>  
                            }
                      </span>
                    </div>
                    <button type="button" class="btn btn-secondary" >edit</button>
                    <button class="btn" type="button" onClick={()=>{deleteTodo(todo.id)}} >✖</button>  
                </li>
              )
            }
            
          )
        ): 
        (<tr>
            <td colSpan={2} style={{textAlign: "center"}}>
            <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            </td>
            </tr>
        )     
        }
      </div>
      
    </div>
  )
}
export default Todo2