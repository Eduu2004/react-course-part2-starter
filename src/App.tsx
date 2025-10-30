import { useReducer } from "react";
import "./App.css";
import TasksContext from "./state-management/context/tasksConext";
import NavBar from "./state-management/NavBar";
import AuthProvider from "./state-management/reducer/AuthProvider";
import taskReducer from "./state-management/reducer/taskReducer";
import TaskList from "./state-management/TaskList";
import TasksProviders from "./state-management/TasksProviders";

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
