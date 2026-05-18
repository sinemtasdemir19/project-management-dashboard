import { useState } from "react";
import Home from "./pages/Home";
import AddTaskPage from "./pages/AddTaskPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      ...task,
    };

    setTasks([...tasks, newTask]);

    setCurrentPage("home");
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  };

  const [selectedTask, setSelectedTask] = useState(null);

  const editTask = (task) => {
    setSelectedTask(task);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id
        ? updatedTask
        : task
    );

    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  return (
    <>
      {currentPage === "home" && (
        <Home
          tasks={tasks}
          onDeleteTask={deleteTask}
          onEditTask={editTask}
          onUpdateTask={updateTask}
          selectedTask={selectedTask}
          goToAddPage={() =>
            setCurrentPage("add")
          }
        />
      )}

      {currentPage === "add" && (
        <AddTaskPage
          onAddTask={addTask}
          onCancel={() =>
            setCurrentPage("home")
          }
        />
      )}
    </>
  );
}

export default App;