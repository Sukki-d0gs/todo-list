import { FaTimesCircle } from "react-icons/fa";

function Task({ task, done, onDelete }) {
  return (
    <div className="task">
      <h3
        style={{ textDecoration: task.done ? "line-through" : "" }}
        onClick={() => done(task.id)}
      >
        {task.task}
      </h3>
      <FaTimesCircle className="delete" onClick={() => onDelete(task.id)} />
    </div>
  );
}

export default Task;
