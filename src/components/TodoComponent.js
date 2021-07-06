import { useState } from "react";

const TodoComponent=(props)=>{
    const [isCompleted,setCompleted]=useState(props.todo.isCompleted);
    function toggle(){
      setCompleted(!isCompleted);
      var data= JSON.parse(localStorage.getItem('todos'));
      data = data.map((e)=>{
        if(e.id==props.todo.id){
          e.isCompleted=!e.isCompleted;
        }
        return e;
      });
      localStorage.setItem('todos',JSON.stringify(data));
    }
    function deleteTodo(e){
      e.preventDefault();
      console.log(props.todo.id);
      props.deleteTodo(props.todo.id);
    }
    return(
        <>
          <tr>
            <td><input type='checkbox' onChange={toggle} defaultChecked={isCompleted  }/>&nbsp;{isCompleted?(<s>{props.todo.title}</s>):(<>{props.todo.title}</>)}</td>
            <td id="delete-btn">
                <button onClick={deleteTodo} class="btn btn-danger">
                    <i class="fa fa-trash"></i> Delete
                </button>
            </td>
          </tr>
        </>
    );
}
export default TodoComponent;