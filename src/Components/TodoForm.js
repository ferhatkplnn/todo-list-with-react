import React, { useState } from "react";
import "../styles/TodoForm.css";

function TodoForm({ addNewTodo }) {
    const [text, setText] = useState("");

    const handleAddTodo = () => {
        if (text.trim() !== "") {
            addNewTodo(text);
            setText("");
        }
    };

    return (
        <div className="todo-form">
            <input
                type="text"
                placeholder="Yeni bir gorev ekleyin"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button onClick={handleAddTodo}>Ekle</button>
        </div>
    );
}

export default TodoForm;
