import Tasks from "./Tasks";

function SelectedProject({ project, onAddTask, onDeleteProject, onDeleteTask, tasks }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <section className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-stone-600">{project.title}</h1>
          <button onClick={() => onDeleteProject(project.id)} className="text-stone-600 hover:text-stone-950">
            Delete
          </button>
        </div>

        <div>
          <p className="mt-1 text-stone-400">{formattedDate}</p>
          <p className="mt-4 mb-1">{project.description}</p>
        </div>
      </header>
      <Tasks  tasks={tasks} onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
    </section>
  );
}

export default SelectedProject;
