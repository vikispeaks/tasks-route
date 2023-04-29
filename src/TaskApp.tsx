import React from "react";
import { TaskItem } from "./types";

import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

const TaskApp = (props: TaskAppProp) => {
  const [taskAppState, setTaskAppState] = useLocalStorage<TaskAppState>(
    "tasks",
    {
      tasks: [],
    }
  );
  const addTask = (task: TaskItem) => {
    const id = btoa(Math.random().toString()).substring(10, 15);
    setTaskAppState({ tasks: [...taskAppState.tasks, { ...task, id }] });
  };
  const removeTask = (task: TaskItem) => {
    setTaskAppState({
      tasks: taskAppState.tasks.filter((item) => item.id !== task.id),
    });
  };
  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-2 font-bold text-slate-700">Smarter Tasks</h1>
      <h1 className="text-md mb-6 text-slate-600">
        <span className="font-bold">Project: </span>
        Graduation Final Year Project (Revamp college website)
      </h1>
      <div className="grid grid-cols-1 gap-4 mb-2">
            <TaskForm addTask={addTask} />
        </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-slate-200 rounded-xl p-4">
          <h1 className="text-slate-500 font-bold text-center mb-2">Pending</h1>
          <TaskList tasks={taskAppState.tasks} removeTask={removeTask} />
        </div>
      </div>
    </div>
  );
};
export default TaskApp;
