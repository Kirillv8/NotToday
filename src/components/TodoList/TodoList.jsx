import { Box, Typography } from "@mui/material";
import { useTodos } from "../../TodoContext/TodoContext";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const todos = useTodos();

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ mt: 4 }}>
          План
        </Typography>
        {todos
          .filter((todo) => !todo.status)
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </Box>
      <Box>
        <Typography variant="h4" sx={{ mt: 6 }}>
          Готово
        </Typography>
        {todos
          .filter((todo) => todo.status)
          .map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
      </Box>
    </>
  );
};

export default TodoList;
