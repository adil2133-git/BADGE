import React, { useEffect, useRef, useState } from 'react'

function TodoList({todos, addTodo, deleteTodo, editTodo}) {
    const [text, setText] = useState("")
    const [edit, setEdit] = useState(null)

    const inputRef = useRef(null)

    useEffect(() => {
        if(edit !== null) {
            inputRef.current.focus()
        }
    },[edit])

    const handleSubmit = () => {
        if(!text.trim() === "" ) return;

        if(edit) {
            editTodo(edit, text)
            setEdit(null)
        } else {
            addTodo(text);
        }
        setText("")
    }

  return (
    <div>
        <h2>Todo List</h2>

        <input ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter todo' />
        <button onClick={handleSubmit}>{edit ? "Update" : "Add"}</button>

        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => {setText(todo.text); setEdit(todo.id);}}>Edit</button>
                    <button onClick={() => deleteTodo(todo)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList