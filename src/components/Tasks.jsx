import NewTask from "./NewTask";

function Tasks({ tasks, onAddTask, onDeleteTask }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-600">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && <p>This project does not have any task yet</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li className="flex justify-between my-4" key={task.id}>
                <p>{task.taskText}</p>
                <button onClick={() => onDeleteTask(task.id)}>Clear</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Tasks;
