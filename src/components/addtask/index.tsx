// import { useTaskAdd } from "@/providers/api";
// import { useState } from "react";
// import { MainDiv } from "./styled";
// //import { useMutation } from "react-query";

// //import { addTask } from "../Providers/task/api";
// //import "./HomePage.css";

// export default function AddTask() {

//   return (
//     <MainDiv>
//       <input
//         placeholder="Add your new Task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       ></input>
//       <button onClick={() => submitTask(task)}>+</button>
//     </MainDiv>
//   );
// }

import { useTaskAdd } from "@/providers/api";
import React, { useState } from "react";

import PlusIcon from "../../../public/icons/PlusIcon";
import { StyledForm, StyledInput, StyledButton } from "./styled";

const AddTask = () => {
  const { mutate } = useTaskAdd();
  const [task, setTask] = useState("");
  function submitTask(task: string) {
    mutate({ task });
    setTask("");
  }

  return (
    <StyledForm>
      <StyledInput
        placeholder="Add your new Task"
        value={task}
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setTask(e.target.value)
        }
      />
      <StyledButton onClick={() => submitTask(task)}>
        <PlusIcon />
      </StyledButton>
    </StyledForm>
  );
};

export default AddTask;
