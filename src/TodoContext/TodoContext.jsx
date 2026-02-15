import { useReducer, useContext, createContext } from "react";

const TodosContext = createContext(null);
const ReducerContext = createContext(null);

const TodoContext = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, []);

  return (
    <>
      <TodosContext.Provider value={state}>
        <ReducerContext.Provider value={dispatch}>
          {children}
        </ReducerContext.Provider>
      </TodosContext.Provider>
    </>
  );
};

export const useTodos = () => useContext(TodosContext);
export const useDispatch = () => useContext(ReducerContext);

const todosReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      return [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          status: false,
        },
      ];
    }
    case "REMOVE_TASK": {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    case "CHANGE_TASK": {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, task: action.payload.task };
        } else {
          return todo;
        }
      });
    }
    case "TOGGLE_STATUS": {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            status: !todo.status,
          };
        }

        return todo;
      });
    }
    default: {
      return state;
    }
  }
};

export default TodoContext;
