import { useState } from "react";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

function App() {
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all"); // "all", "completed", "incomplete"

    const addNewTodo = (text) => {
        const newTodo = { text, completed: false };
        setTodos([...todos, newTodo]);
    };

    const completeTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].completed = true;
        setTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const listCompletedTodos = () => {
        return todos
            .filter((todo) => todo.completed)
            .map((todo, index) => (
                <div key={index}>{todo.text} - Tamamlandi</div>
            ));
    };

    const listIncompleteTodos = () => {
        return todos
            .filter((todo) => !todo.completed)
            .map((todo, index) => {
                <div key={index}>{todo.text} - Tamamlanmadi</div>;
            });
    };

    return (
        <div>
            <h1>Todo List</h1>

            <TodoForm addNewTodo={addNewTodo} />

            <div>
                <button onClick={() => setStatus("all")}>Tum Gorevler</button>
                <button onClick={() => setStatus("completed")}>
                    Tamamlanmis Gorevler
                </button>
                <button onClick={() => setStatus("incomplete")}>
                    Tamamlanmamis Gorevler
                </button>
            </div>

            {status === "all" && (
                <TodoList
                    todos={todos}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                />
            )}
            {status === "completed" && listCompletedTodos()}
            {status === "incomplete" && listIncompleteTodos()}
        </div>
    );
}

export default App;
