import { useState } from "react";

function AddTask({ onAdd }) {
  const [task, setTask] = useState("");
  const [isDone, setIsDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    if (!task) {
      alert("Please add a task!");
      return;
    }

    onAdd({ task, isDone });
    setTask("");
    setIsDone(false);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task:</label>
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>
      <input type="submit" value="Save task" className="add-button" />
    </form>
  );
}

export default AddTask;
