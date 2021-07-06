var todoList=[

]
export const getTodoList = ()=>{
    return todoList;
}
export const store = (todo)=>{
    if(todo=='')
        return false;
    todoList.push(todo);
    return true;
}

