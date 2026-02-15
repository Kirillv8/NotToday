import { TextField, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "../../TodoContext/TodoContext";
import { useState } from "react";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  return (
    <Box sx={{ width: 400, display: "flex", alignItems: "center", gap: 1 }}>
      <TextField
        id="standard-basic"
        label="New task name"
        variant="standard"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        fullWidth
      />
      <IconButton
        sx={{ color: "#2196f3" }}
        disabled={inputValue.trim().length < 3}
        onClick={() => {
          dispatch({
            type: "ADD_TASK",
            payload: {
              id: Date.now(),
              task: inputValue.trim(),
              status: false,
            },
          });
          setInputValue("");
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default TodoInput;
