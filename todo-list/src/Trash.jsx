import React from 'react'

function Trash({deletedTodos, undoTodo}) {
  return (
    <div>
        <h2>Deleted Todos</h2>

        {deletedTodos.length === 0 && <p>No deleted todos</p>}

        <ul>
            {deletedTodos.map((todo) => (
                <li key={todo.id}>
                    {todo.text}

                    <button onClick={() => undoTodo(todo)}>Undo</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Trash