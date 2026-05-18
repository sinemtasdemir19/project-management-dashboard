import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [responsible, setResponsible] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName || !projectName || !responsible || !deadline) {
      alert("Please fill in all fields.");
      return;
    }

    const task = {
      taskName,
      projectName,
      responsible,
      deadline,
      priority,
      status,
    };

    onAddTask(task);

    setTaskName("");
    setProjectName("");
    setResponsible("");
    setDeadline("");
    setPriority("Medium");
    setStatus("Pending");
  };

  return (
    <div className="card shadow mb-4">

      <div className="card-header">
        Add New Task
      </div>

      <div className="card-body">

        <form className="row g-3" onSubmit={handleSubmit}>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Task name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Responsible person"
              value={responsible}
              onChange={(e) => setResponsible(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <select
              className="form-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div className="col-md-6">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Add Task
            </button>
          </div>

        </form>

      </div>

    </div>
  );
}

export default TaskForm;