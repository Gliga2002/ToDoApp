import toDoLogo from '../assets/no-projects.png'
import Button from './util/Button';

function NoProjectSelected({onStartAddNewProject}) {
  return <section className="w-4/5 text-center mt-32">
    <img src={toDoLogo} alt="Paper with tasks" className="w-16 h-16 object-contain mx-auto"/>
    <h2 className="font-bold text-xl my-4 text-stone-500">No projects selected</h2>
    <p className="mt-2 mb-6 text-stone-400">Select a project or get started with a new one</p>
    <Button onClick={onStartAddNewProject}>Create new project</Button>
  </section>;
}

export default NoProjectSelected;
