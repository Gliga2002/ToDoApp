import { useRef } from "react";
import Button from "./util/Button";
import Input from "./util/Input";
import Modal from "./util/Modal";

function validateInput({ enteredTitle, enteredDescription, enteredDueDate }) {
  if (
    enteredTitle.trim() === "" ||
    enteredDescription.trim() === "" ||
    enteredDueDate.trim() === ""
  ) {
    return false;
  } else {
    return true;
  }
}

function NewProject({ onAddProject, onCancelAddNewProject }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSaveInputs() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    const isValidate = validateInput({enteredTitle, enteredDescription, enteredDueDate})

    if (!isValidate) {
      modal.current.open();
      return;
    }


    // validation ...
    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
    <Modal ref={modal} btnCaption="Okay">
      <h2 className="font-bold text-xl my-4 text-stone-500">Invalid Input</h2>
      <p className="mt-2 mb-6 text-stone-400">Ooops... looks like you forgot to enter a value.</p>
      <p className="mt-2 mb-6 text-stone-400">Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <section className="w-[35rem] mt-16">
      <div className="flex items-center justify-end gap-3">
        <button onClick={onCancelAddNewProject}>Cancel</button>
        <Button onClick={handleSaveInputs} isClassic>
          Save
        </Button>
      </div>
      <div>
        <Input ref={title} title="Title" TextInput="input" type="text" />
        <Input ref={description} title="Description" TextInput="textarea" />
        <Input ref={dueDate} title="Due date" TextInput="input" type="date" />
      </div>
    </section>
    </>
  );
}

export default NewProject;
