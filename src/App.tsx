import "./App.css";
import NavBar from "./state-management/NavBar";
import { TaskList, TasksProviders } from "./state-management/tasks";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <>
        <TasksProviders>
          <Counter />
          <NavBar />
          <TaskList />
        </TasksProviders>
    </>
  );
}

export default App;
