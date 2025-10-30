import "./App.css";
import NavBar from "./state-management/NavBar";
import { TaskList, TasksProviders } from "./state-management/tasks";
import AuthProvider from "./state-management/auth/AuthProvider";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProviders>
          <Counter />
          <NavBar />
          <TaskList />
        </TasksProviders>
      </AuthProvider>
    </>
  );
}

export default App;
