import "./App.css";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/reducer/AuthProvider";
import TaskList from "./state-management/tasks/TaskList";
import { TasksProviders } from "./state-management/tasks";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProviders>
          <NavBar />
          <TaskList />
        </TasksProviders>
      </AuthProvider>
    </>
  );
}

export default App;
