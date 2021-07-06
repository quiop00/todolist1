import { useState } from "react";
import { MessageType } from "../constants/message_type";
const TodoInput=(props)=>{
    const [title,inputTitle] = useState('');
    function onChangeTitle(e){
      inputTitle(e.target.value);
    }
    function addTask(e){
        e.preventDefault();
        props.addTodo(title);
        inputTitle('');
    }
    return(
        <div className="container">
        <div className="row">
           <div className="col-md-6 offset-md-3">
                   <div className="card ">
                       <div className="card-header bg-primary text-white">
                             New task
                       </div>
                   <div className="card-body">
                        <div className="form-group">
                            <label for="content">Task</label>
                            <input type="text" onChange={onChangeTitle} value={title} name="content" className="form-control" placeholder=""/>
                        </div>
                        <button onClick={addTask} className="btn btn-primary">+ Add Task</button>
                   </div>
                   </div>
                   {(props.type===MessageType.INSERT_FAIL)?(
                     <div className="alert alert-danger" role="alert">
                     Please input todo!
                   </div>
                   ):<></>
                   }
                   {(props.type===MessageType.INSERT_SUCCESS)?(
                     <div className="alert alert-success" role="alert">
                     Insert success!
                   </div>
                   ):<></>
                   }
                    {(props.type===MessageType.DELETE_SUCCESS)?(
                     <div className="alert alert-success" role="alert">
                     Delete success!
                   </div>
                   ):<></>
                   }
                   
            </div>
            
           </div>
           
       </div>
    );
}

export default TodoInput;