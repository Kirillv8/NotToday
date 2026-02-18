import TodoInput from "./components/TodoInput/TodoInput";
import TodoItem from "./components/TodoItem/TodoItem";
import { Typography, Box, Container } from "@mui/material";
import TodoContext from "./TodoContext/TodoContext";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <>
      <TodoContext>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{ color: "#2196f3", display: "flex", justifyContent: "center" }}
          >
            TODO
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <TodoInput />
          </Box>
          <Box sx={{ marginTop: 10 }}>
            <TodoItem />
          </Box>
          <Box>
            <TodoList />
          </Box>
        </Container>
      </TodoContext>
    </>
  );
}

export default App;
