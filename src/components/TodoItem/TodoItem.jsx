import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/EditOutlined";
import { useDispatch } from "../../TodoContext/TodoContext";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  if (!todo) return null;

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
        <Checkbox
          checked={todo.status}
          onChange={() =>
            dispatch({
              type: "TOGGLE_STATUS",
              payload: {
                id: todo.id,
                status: !todo.status,
              },
            })
          }
        />
        <Typography
          sx={{
            color: "white",
            textDecoration: todo.status ? "line-through" : "none",
            opacity: todo.status ? 0.6 : 1,
          }}
        >
          {todo.task}
        </Typography>
      </Box>

      <Box>
        <IconButton sx={{ color: "#00B2FF" }}>
          <EditIcon />
        </IconButton>
        <IconButton
          sx={{ color: "#FF8A00" }}
          onClick={() =>
            dispatch({
              type: "REMOVE_TASK",
              payload: { id: todo.id },
            })
          }
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoItem;
