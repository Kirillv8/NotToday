import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/EditOutlined";

const TodoItem = ({ text = "Пример задачи", isCompleted = false }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: 400,
        mt: 2,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Checkbox checked={isCompleted} />
        <Typography sx={{ color: "white" }}>{text}</Typography>
      </Box>

      <Box>
        <IconButton sx={{ color: "#00B2FF" }}>
          <EditIcon />
        </IconButton>
        <IconButton sx={{ color: "#FF8A00" }}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoItem;
