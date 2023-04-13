import Task from "./Task";

function Tasks({ tasks, isDone, onDelete }) {
  return (
    <div className="tasks">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Task key={task.id} task={task} done={isDone} onDelete={onDelete} />
        ))
      ) : (
        <h3>You've done all of your tasks!</h3>
      )}
    </div>
  );
}

export default Tasks;
