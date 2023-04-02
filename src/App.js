
import './App.css';
import Header from './MyComponent/Header';
import { Todos } from './MyComponent/Todos';
import {Footer} from './MyComponent/Footer';
import { AddTodo } from './MyComponent/AddTodo';
import React, { useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
   const onDelete=(todo)=>{
    console.log("im delete",todo);
    // let index=todos.indexOf(todo)
   
     setTodos(todos.filter((e)=>{
      return e!==todo;
     }));
     localStorage.setItem("todos",JSON.stringify(todos));

   }

   const addTodo =(title,desc)=>{
    console.log("im adding thi todo", title,desc)
    // let sno=todos[todos.length-1].sno + 1;
    let sno;
    if(todos.length==0){
      sno=0;
     }
     else{
       sno=todos[todos.length-1].sno + 1;
  
     }
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
      console.log(myTodo );
     
   }
   
   const [todos,setTodos ] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])
    
   return (
   <>
     <Router>
   <Header title="TodosList" searchBar={false}/>
      <Switch>
          <Route path="/" render={()=>{
            return(
          <>
          
          <AddTodo addTodo={addTodo}/>
          <Todos todos={todos} onDelete={onDelete}/>  
          </>)
          }}>
            <Home/>
          </Route>
          <Route path="/about">
            <About />
          </Route> 
        </Switch>
   
   <Footer/>
   </Router>
   </>
  );
}

export default App;
