import AddTaskButton from "./AddTaskButton";

function Header({ onAdd }) {
  return (
    <div className="App-header">
      <h1>To-do App</h1>
      <AddTaskButton onShowAdd={onAdd} />
    </div>
  );
}

export default Header;
