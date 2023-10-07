import React, { useState } from "react";

function TodoForm({ addNewTodo }) {
    const [text, setText] = useState("");

    const handleAddTodo = () => {
        if (text.trim() !== "") {
            addNewTodo(text);
            setText("");
        }
    };

    return (
        <div>
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
