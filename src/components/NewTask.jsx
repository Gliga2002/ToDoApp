import { useState, useRef } from "react";
import Modal from "./util/Modal";

function NewTask({ onAddTask }) {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleOnChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleOnClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }
  return (
    <>
     <Modal ref={modal} btnCaption="Okay">
      <h2 className="font-bold text-xl my-4 text-stone-500">Invalid Task</h2>
      <p className="mt-2 mb-6 text-stone-400">Ooops... looks like you forgot to enter a value.</p>
      <p className="mt-2 mb-6 text-stone-400">Please make sure you provide a valid value for every input field.</p>
    </Modal>

    <div className="flex items-center gap-4 my-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleOnChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleOnClick}
      >
        Add Task
      </button>
    </div>
    </>
  );
  
}

export default NewTask;
