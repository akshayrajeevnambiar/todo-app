import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const TodoItem = ({ todo, fetchCurrentTodo }) => {
  console.log(todo);

  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => fetchCurrentTodo(todo?.id)}
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "#000",
              color: "#fff",
              opacity: "1",
            },
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
