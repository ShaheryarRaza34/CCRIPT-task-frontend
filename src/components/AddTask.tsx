import { useTaskAdd } from "@/providers/api";
import { useState } from "react";
//import { useMutation } from "react-query";

//import { addTask } from "../Providers/task/api";
//import "./HomePage.css";

export default function AddTask() {
  const { mutate } = useTaskAdd();
  const [task, setTask] = useState("");
  function submitTask(task: string) {
    mutate({ task });
    setTask("");
  }
  return (
    <div className="inputtask">
      <input
        placeholder="Add your new Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      ></input>
      <button onClick={() => submitTask(task)}>+</button>
    </div>
  );
}
