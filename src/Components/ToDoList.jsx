import { useState } from "react"

let ToDoList=()=>{
    const [todos, setTodos] = useState([]);
    const [newtodo, setNewTodo] = useState('');

    const addTodo = () =>{
        if(newtodo.trim()){
            setTodos([...todos, {id:Date.now(), text: newtodo, isEditing: false}]);
            setNewTodo('');
        }
    };
    const deleteTodo = (id) =>{
        setTodos(todos.filter(todo => todo.id !==id));
    };

    const toggleEdit = (id) => {
        setTodos(
            todos.map(todo=> todo.id === id ? {...todo, isEditing: !todo.isEditing}:todo)
        );
    };

    const handlerEditChange = (id, newText) =>{
        setTodos(todos.map(todo => todo.id === id ? {...todo,text:newText}: todo));
    }

    const handlerEditSubmit = (id) => {
        todos.map(todo => todo.id === id? {...todo,isEditing: false}: todo);
    };

    return(
        <>
            <div className="cont">
                <h1> To do List</h1>
                <div>
                    <input type="text" value={newtodo} onChange={e => setNewTodo(e.target.value)} placeholder=" Add a todo" />
                    <button onClick={addTodo}>Add</button>
                </div>
                <ul>
                    {
                        todos.map(todo =>(
                            <li key={todo.id} >
                            {todo.isEditing? (
                                <>
                                    <input type="text" value={todo.text} onChange={e=>handlerEditChange(todo.id, e.target.value)}/>
                                    <button onClick={()=> handlerEditSubmit(todo.id)}>Save</button>
                                    <button onClick={()=> toggleEdit(todo.id)}>Cancle</button>
                                </>
                            ):(<>
                                <span>{todo.text}</span>
                                <button onClick={()=> toggleEdit(todo.id)}>Edit</button>
                                <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                            </>)}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}
export default ToDoList