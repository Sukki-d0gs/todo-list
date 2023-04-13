function AddTaskButton({ onShowAdd }) {
  return (
    <div>
      <button className="button" onClick={onShowAdd}>
        Add
      </button>
    </div>
  );
}

export default AddTaskButton;
