import React from "react";
// import "./HomePage.css";
import Task from "../tasks";

import AddTask from "../addtask/index";

import { Home, Logo, Tasks } from "./styled";
import { useTasksList } from "@/providers/api";
import HeaderDiv from "../header/index";

const HomeScreen = () => {
  const { data, isLoading, error } = useTasksList();

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <Home>
      <Logo />

      <AddTask />
      <HeaderDiv />
      <Tasks>
        {data?.tasks.length ? (
          data?.tasks.map((task) => (
            <Task
              key={task.task}
              task={task.task}
              id={task.id}
              completed={task.completed}
              createdAt={task.createdAt}
            />
          ))
        ) : (
          <span>
            You have <span>{data?.tasks.length}</span>
            pending tasks
          </span>
        )}
      </Tasks>
    </Home>
  );
};

export default HomeScreen;
