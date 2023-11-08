import { useTaskDelete, useTaskUpdate } from "@/providers/api";
import { Item } from "@/providers/api/types";
import { useState } from "react";

const Task = ({ task, id }: Item) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);
  const { mutate: remove } = useTaskDelete();
  const { mutate: update } = useTaskUpdate();

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

  return (
    <div className="task__body">
      {isEditing ? (
        <input
          className="task_name__input"
          value={editedTask}
          onChange={(event) => setEditedTask(event.target.value)}
        />
      ) : (
        <h2 className="task_name">{task}</h2>
      )}
      <div className="task__buttons">
        {isEditing ? (
          <>
            <button
              className="task__saveButton"
              onClick={() => handleSaveButtonClick(id, editedTask)}
            >
              Save
            </button>
            <button
              className="task__cancelButton"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="task__updateButton"
            onClick={handleEditButtonClick}
          >
            Edit
          </button>
        )}
        <button className="task__deleteButton" onClick={() => remove({ id })}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
