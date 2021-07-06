import { useState } from "react";
import TodoComponent from "./TodoComponent";
import TodoInput from "./TodoInput";
import {v4 as uuid} from 'uuid';
import { MessageType } from "../constants/message_type";
const TodoList=()=>{
    var data=[];
    if(localStorage['todos']==null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else{
      data = JSON.parse(localStorage.getItem('todos'));
    }
    const  [todos,setTodos]= useState(data);

    const [type,setType]=useState(0);
    const addTodo = (title)=>{
      if(title==''){
        setType(MessageType.INSERT_FAIL);
        return;
      }
      var todo = {
        id: uuid(),
        title: title,
        isCompleted : false
      }
      setTodos([...todos,todo]);
      localStorage.setItem('todos',JSON.stringify([...todos,todo]));
      setType(MessageType.INSERT_SUCCESS);
    }
    const deleteTodo=(id)=>{
      var newData = todos.filter((todo) => todo.id !== id)
      setTodos(newData);
      localStorage.setItem('todos',JSON.stringify(newData));
      setType(MessageType.DELETE_SUCCESS);
    }
    return(
        <>
        <TodoInput addTodo={addTodo} type={type}/>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
               <div className="card ">
                   <div className="card-header bg-primary text-white">
                         Current task
                   </div>
               
                    <div className="card-body">
                      <table>
                        <thead>
                          <tr>
                            <th>Task</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {todos.map((todo)=>(
                              <TodoComponent key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
                          ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </>
    );
}
export default TodoList;