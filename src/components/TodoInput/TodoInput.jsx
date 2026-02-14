import { TextField, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const TodoInput = () => {
  return (
    <Box sx={{ width: 400, display: "flex", alignItems: "center", gap: 1 }}>
      <TextField
        id="standard-basic"
        label="New task name"
        variant="standard"
        fullWidth
      />
      <IconButton sx={{ color: "#2196f3" }}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default TodoInput;
