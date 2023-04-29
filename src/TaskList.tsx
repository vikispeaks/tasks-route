import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  removeTask: (task: TaskItem) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <Task
      key={task.id || idx}
      item={task}
      removeTask={props.removeTask}
    />
  ));
  return <>{list}</>
};

export default TaskList;
