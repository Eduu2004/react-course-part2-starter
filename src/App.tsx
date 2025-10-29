import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import taskReducer from "./state-management/reducer/taskReducer";
import { Dispatch } from "react";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import TasksContext from "./state-management/context/tasksConext";
import TaskList from "./state-management/TaskList";
import authReducer from "./state-management/reducer/authReducer";
import AuthContext from "./state-management/context/authContext";
import AuthProvider from "./state-management/reducer/AuthProvider";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <>
      <AuthProvider>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <TaskList />
        </TasksContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
