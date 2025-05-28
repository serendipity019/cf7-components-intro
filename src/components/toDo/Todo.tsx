import TodoForm from "./todoForm";
import { useReducer } from "react";

type TodoProps = {
    id: number;
    text: string;
}

type Actions = 
|{ type: "ADD"; payload: string }
|{ type: "DELETE"; payload: number }

const todoReducer = (state: TodoProps[], action: Actions): TodoProps[] => {
    switch (action.type) {
        case "ADD":
            const newTodo: TodoProps = {
                id: Date.now(),
                text: action.payload
            };
            return [...state, newTodo];
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

const Todo = () => { 
    const [todos, dispatch] = useReducer(todoReducer, []);
    
    const addTodo = (text: string) => {
        dispatch({ type: "ADD", payload: text });
    }
    
    const deleteTodo = (id: number) => {
        dispatch({ type: "DELETE", payload: id });
    }

    return ( 
        <>
            <div className="max-w-sm max-auto p-6">
                <h1 className="text-center text-2xl">To-Do List</h1>
                <TodoForm/>
            </div>

        </>
    )
}

export default Todo;