import { useState } from "react";
import { defaultTask } from "../interfaces/TaskInterface";

function TaskForm({ onAddTask, onCancel }) {
  const [taskName, setTaskName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState(
    defaultTask.priority
  );

  const [status, setStatus] = useState(
    defaultTask.status
  );

  const resetForm = () => {
    setTaskName("");
    setProjectName("");
    setDescription("");
    setResponsible("");
    setDeadline("");
    setPriority(defaultTask.priority);
    setStatus(defaultTask.status);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !taskName ||
      !projectName ||
      !responsible ||
      !deadline
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const task = {
      id: Date.now(),
      taskName,
      projectName,
      description,
      responsible,
      deadline,
      priority,
      status,
    };

    onAddTask(task);

    resetForm();
  };

  return (
    <div className="card custom-card mb-4">
      <div className="card-header custom-header">
        Add New Task
      </div>

      <div className="card-body p-4">
        <form className="row g-3" onSubmit={handleSubmit}>

          <div className="col-md-6">
            <label className="form-label">
              Task Name
            </label>

            <input
              className="form-control"
              placeholder="Example: Complete UI design"
              value={taskName}
              onChange={(e)=>
                setTaskName(e.target.value)
              }
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Project Name
            </label>

            <input
              className="form-control"
              placeholder="Example: Web Development Project"
              value={projectName}
              onChange={(e)=>
                setProjectName(e.target.value)
              }
            />
          </div>

          <div className="col-12">

            <label className="form-label">
              Description
            </label>

            <textarea
              className="form-control"
              rows="3"
              placeholder="Describe task details..."
              value={description}
              onChange={(e)=>
                setDescription(e.target.value)
              }
            />

          </div>

          <div className="col-md-6">

            <label className="form-label">
              Responsible Person
            </label>

            <input
              className="form-control"
              value={responsible}
              onChange={(e)=>
                setResponsible(e.target.value)
              }
            />

          </div>

          <div className="col-md-6">

            <label className="form-label">
              Deadline
            </label>

            <input
              type="date"
              className="form-control"
              value={deadline}
              onChange={(e)=>
                setDeadline(e.target.value)
              }
            />

          </div>

          <div className="col-md-6">

            <label className="form-label">
              Priority
            </label>

            <select
              className="form-select"
              value={priority}
              onChange={(e)=>
                setPriority(e.target.value)
              }
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>

            </select>

          </div>

          <div className="col-md-6">

            <label className="form-label">
              Status
            </label>

            <select
              className="form-select"
              value={status}
              onChange={(e)=>
                setStatus(e.target.value)
              }
            >
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>

            </select>

          </div>

          <div className="col-md-6">

            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={onCancel}
            >
              Cancel
            </button>

          </div>

          <div className="col-md-6">

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