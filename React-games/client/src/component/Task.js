import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");
  const [inputPriority, setInputPriority] = useState("Low");
  const [inputDueDate, setInputDueDate] = useState("");

  const handleTaskChange = (event) => {
    setInputTask(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setInputPriority(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setInputDueDate(event.target.value);
  };

  const handleAddTask = () => {
    if (inputTask.trim() !== "") {
      const newTask = {
        task: inputTask,
        priority: inputPriority,
        dueDate: inputDueDate,
        status: "Pending",
      };
      setTasks([...tasks, newTask]);
      setInputTask("");
      setInputPriority("Low");
      setInputDueDate("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleUpdateStatus = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input type="text" value={inputTask} onChange={handleTaskChange} placeholder="Task" />
      <select value={inputPriority} onChange={handlePriorityChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input type="date" value={inputDueDate} onChange={handleDueDateChange} />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.task}</span>
            <span>Priority: {task.priority}</span>
            <span>Due Date: {task.dueDate}</span>
            <span>Status: {task.status}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
            <button onClick={() => handleUpdateStatus(index, "Completed")}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
