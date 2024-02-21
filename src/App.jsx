import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(task) {
    const taskId = Math.random();
    const newTask = {
      projectId: projectState.selectedProjectId,
      taskText: task,
      id: taskId,
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== taskId),
      };
    });
  }

  function handleSelectProject(projId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projId,
      };
    });
  }


  function handleStartAddNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(enteredProject) {
    const projectId = Math.random();
    const newProject = {
      ...enteredProject,
      id: projectId,
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleDeleteProject(projectId) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== projectId),
      };
    });
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
  const selectedTasks = projectState.tasks.filter(task => task.projectId === projectState.selectedProjectId);

  return (
    <main className="h-screen flex gap-8 mt-8">
      <SideBar
        selectedProjectId={projectState.selectedProjectId}
        onStartAddNewProject={handleStartAddNewProject}
        onSelectProject={handleSelectProject}
        projects={projectState.projects}
      />
      {projectState.selectedProjectId === undefined && (
        <NoProjectSelected onStartAddNewProject={handleStartAddNewProject} />
      )}
      {projectState.selectedProjectId === null && (
        <NewProject
          onAddProject={handleAddProject}
          onCancelAddNewProject={handleCancelAddNewProject}
        />
      )}
      {projectState.selectedProjectId && <SelectedProject tasks={selectedTasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}  project={selectedProject} onDeleteProject={handleDeleteProject}/>}
    </main>
  );
}

export default App;
