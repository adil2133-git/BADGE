import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Todo = ({todos, setTodos, setDeleteTodos}) => {
    const [text, setText] = useState("")
    const [edit, setEdit] = useState(null)
    const navigate = useNavigate()

    const addTodo = () => {
        if(text.trim() === "") return;

        if(edit) {
            setTodos(
                todos.map((t) => 
                    t.id === edit ? {...t, text } : t
                )
            );
            setEdit(null)
        }else{
            setTodos([...todos, { id: Date.now(), text }])
        }
        setText("");
    }

    const deleteTodo = (todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
        setDeleteTodos((prev) => [...prev, todo])
    };
    
    const editTodo = (todo) => {
        setText(todo.text);
        setEdit(todo.id);
    };
  return (
    <div>
        <h2>Todo List</h2>

        <button onClick={() => navigate("/deleted")}>Deleted Todos</button>

        <br /><br />

        <input type='text' value={text} placeholder='Enter a todo' onChange={(e) => setText(e.target.value)} />

        <button onClick={addTodo}>{edit ? "Update" : "Add"}</button>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}

                    <button onClick={() => editTodo(todo)}>Edit</button>
                    <button onClick={() => deleteTodo(todo)}>Delete</button>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Todo