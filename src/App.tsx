import "./App.css";
import NavBar from "./state-management/NavBar";
import { TaskList, TasksProviders } from "./state-management/tasks";
import AuthProvider from "./state-management/auth/AuthProvider";

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
