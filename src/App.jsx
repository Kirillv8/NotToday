import TodoInput from "./components/TodoInput/TodoInput";
import TodoItem from "./components/TodoItem/TodoItem";
import { Typography, Box, Container } from "@mui/material";
function App() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column", // Задачи пойдут вниз
          alignItems: "center", // Центрируем по горизонтали
          gap: 2, // Отступ между инпутом и списком
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
      </Container>
    </>
  );
}

export default App;
