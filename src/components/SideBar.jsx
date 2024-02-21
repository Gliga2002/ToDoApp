import Button from "./util/Button";

function SideBar({
  onStartAddNewProject,
  projects,
  selectedProjectId,
  onSelectProject,
}) {
  return (
    <aside className="w-1/5 py-16 px-8 bg-stone-800 text-stone-100 rounded-r-xl">
      <h2 className="uppercase mb-8 font-bold md:text-xl">Your Projects</h2>
      <Button onClick={onStartAddNewProject}>+ Add Project</Button>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm mt-3  hover:text-stone-200 hover:bg-stone-800";

          if (selectedProjectId === project.id) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }
          return (
            <button
              onClick={() => onSelectProject(project.id)}
              className={cssClasses}
              key={project.id}
            >
              {project.title}
            </button>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
