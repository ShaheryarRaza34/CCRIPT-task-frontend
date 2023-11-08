import React from "react";
// import "./HomePage.css";
import Task from "../Task";

import AddTask from "../AddTask";

import { Home } from "./styled";
import { useTasksList } from "@/providers/api";

const HomeScreen = () => {
  const { data, isLoading, error } = useTasksList();

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Home>
      <header>ToDoApp</header>
      <AddTask />
      <div className="todo-content">
        {data?.tasks.map((task) => (
          <Task key={task.task} task={task.task} id={task.id} />
        ))}
      </div>

      <div className="footer">
        <span>
          You have <span className="pendingTasks">{data?.tasks.length}</span>
          pending tasks
        </span>
        <button>Clear All</button>
      </div>
    </Home>
  );
};

export default HomeScreen;
