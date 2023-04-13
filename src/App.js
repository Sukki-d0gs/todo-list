import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";

function App() {
  const [showAdd, setShowAdd] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      task: "Feed The Cat",
      done: true,
    },
    {
      id: 2,
      task: "Read 20 pages",
      done: false,
    },
    {
      id: 3,
      task: "Study for 1 hour",
      done: false,
    },
  ]);

  function isDone(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function addTask(task) {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    console.log(task);
  }

  return (
    <div className="App">
      <Header onAdd={() => setShowAdd(!showAdd)} />
      {showAdd ? <AddTask onAdd={addTask} /> : ""}
      <Tasks tasks={tasks} isDone={isDone} onDelete={deleteTask} />
    </div>
  );
}

export default App;
