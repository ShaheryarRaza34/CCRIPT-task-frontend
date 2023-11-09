import { useTaskDelete, useTaskUpdate } from "@/providers/api";
import { Item } from "@/providers/api/types";
import { SetStateAction, useState } from "react";
import {
  Buttons,
  DeleteButton,
  Details,
  Drawer,
  FunctionButton,
  MainDiv,
  StyledEdit,
  TaskHeadings,
  ToDo,
} from "./styled";
import CheckCircleIcon from "../../../public/icons/CheckCircleIcon";
import DotIcon from "../../../public/icons/DotIcon";
import ChevronIcon from "../../../public/icons/ChevronIcon";

const Task = ({ task, id, completed, createdAt }: Item) => {
  console.log(createdAt);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const [isOpen, setIsOpen] = useState(false);

  const { mutate: remove } = useTaskDelete();
  const { mutate: update } = useTaskUpdate();

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = (id: number, task: string) => {
    update({ id, task });
    setIsEditing(false);
  };

  const handleCancelButtonClick = () => {
    setIsEditing(false);
    setEditedTask(task);
  };

  const handleDeleteButtonClick = () => {
    remove({ id });
    setIsOpen(false);
  };

  return (
    <MainDiv>
      {isOpen ? (
        <Drawer>
          <div style={{ ["marginBottom" as any]: "10px" }}>
            <TaskHeadings>Complete status:</TaskHeadings>
            <Details>{completed ? "Completed" : "Not completed"}</Details>
            <TaskHeadings>Created At:</TaskHeadings>
            <Details>{createdAt.toString()}</Details>
          </div>
          <Buttons style={{ ["margin-left" as any]: "0px" }}>
            <DeleteButton onClick={handleDeleteButtonClick}>
              Delete Task
            </DeleteButton>
            <FunctionButton onClick={handleToggle}>
              <img src="/icons/cancel.svg" />
            </FunctionButton>
          </Buttons>
        </Drawer>
      ) : (
        <>
          {isEditing ? (
            <StyledEdit
              value={editedTask}
              onChange={(event: {
                target: { value: SetStateAction<string> };
              }) => setEditedTask(event.target.value)}
            />
          ) : (
            <>
              {
                <FunctionButton onClick={handleToggle}>
                  <ChevronIcon />
                </FunctionButton>
              }

              <ToDo>{task}</ToDo>
            </>
          )}
          <Buttons>
            {isEditing ? (
              <>
                <FunctionButton
                  onClick={() => handleSaveButtonClick(id, editedTask)}
                >
                  <CheckCircleIcon />
                </FunctionButton>
                <FunctionButton onClick={handleCancelButtonClick}>
                  <img src="/icons/cancel.svg" />
                </FunctionButton>
              </>
            ) : (
              //<FunctionButton onClick={() => remove({ id })}>
              <FunctionButton onClick={handleEditButtonClick}>
                <DotIcon />
              </FunctionButton>
            )}
          </Buttons>
        </>
      )}
    </MainDiv>
  );
};

export default Task;
