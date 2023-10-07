import React from "react";
import "../styles/TodoList.css";

function TodoList({ todos, completeTodo, deleteTodo }) {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <div
                    key={index}
                    className={`todo ${
                        todo.completed ? "completed" : "incomplete"
                    }`}
                >
                    {todo.text}
                    <div>
                        <button onClick={() => completeTodo(index)}>
                            Tamamla
                        </button>
                        <button
                            className="btn"
                            onClick={() => deleteTodo(index)}
                        >
                            Sil
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TodoList;
