import React from "react";

function TodoList({ todos, completeTodo, deleteTodo }) {
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    {todo.text}
                    <button onClick={() => completeTodo(index)}>Tamamla</button>
                    <button onClick={() => deleteTodo(index)}>Sil</button>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
