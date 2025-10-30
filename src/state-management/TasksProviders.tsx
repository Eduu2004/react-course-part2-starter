import React, { ReactNode, useReducer } from 'react'
import taskReducer from './reducer/taskReducer';
import TasksContext from './context/tasksConext';

interface Props {
    children: ReactNode

}

const TasksProviders = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
        { children }
    </TasksContext.Provider>
)
}

export default TasksProviders