import React from 'react'
import { useNavigate } from 'react-router-dom'

const DeleteTodo = ({deleteTodos, setDeleteTodos, setTodos}) => {

    const navigate = useNavigate()

    const undoTodo = (todo) => {
        setTodos((prev) => [...prev, todo]);
        setDeleteTodos(deleteTodos.filter((t) => t.id !== todo.id))
    };

  return (
    <div>
        <h2>Deleted Todos</h2>

        <button onClick={() => navigate("/")}>Back to Todo List</button>

        <ul>
            {deleteTodos.length === 0 && <p>No deleted Todos</p>}

            {deleteTodos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => undoTodo(todo)}>Undo</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default DeleteTodo