import { useContext } from "react";
import TasksContext from "../context/tasksConext";

const useTask = () => useContext(TasksContext);

export default useTask;