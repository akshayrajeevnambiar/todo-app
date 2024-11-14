import { useEffect } from "react";
import { useState } from "react";

import classes from "./styles.module.css";
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);

  async function fetchTodos() {
    try {
      setIsLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      if (result?.todos && result?.todos.length > 0) {
        setTodoList(result?.todos);
        setIsLoading(false);
        setErrorMsg("");
      }
    } catch (error) {
      setErrorMsg(error);
    }
  }

  async function fetchCurrentTodo(todoId) {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/todos/${todoId}`);
      const result = await apiResponse.json();

      if (result) {
        setTodoDetails(result);
        setOpenDailog(true);
      } else {
        setTodoDetails([]);
        setOpenDailog(false);
      }
    } catch (error) {
      setErrorMsg(error);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  if (isLoading) {
    return <Skeleton variant="rectangular" width={650} height={650} />;
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>TODO App</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0
          ? todoList.map((todo) => (
              <TodoItem todo={todo} fetchCurrentTodo={fetchCurrentTodo} />
            ))
          : null}
      </div>
      <TodoDetails
        openDailog={openDailog}
        todoDetails={todoDetails}
        setOpenDailog={setOpenDailog}
      />
    </div>
  );
}

export default App;
