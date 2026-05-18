import { useEffect, useState } from "react";

function EditTaskModal({
  selectedTask,
  onUpdateTask,
  onClose
}) {
  const [taskName, setTaskName] = useState("");
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    if (selectedTask) {
      setTaskName(selectedTask.taskName);
      setProjectName(selectedTask.projectName);
      setDescription(selectedTask.description || "");
      setResponsible(selectedTask.responsible);
      setDeadline(selectedTask.deadline);
      setPriority(selectedTask.priority);
      setStatus(selectedTask.status);
    }
  }, [selectedTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      id: selectedTask.id,
      taskName,
      projectName,
      description,
      responsible,
      deadline,
      priority,
      status,
    };

    onUpdateTask(updatedTask);
  };

  if (!selectedTask) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3 className="mb-4">
          Update Task
        </h3>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label className="form-label">Task Name</label>
            <input
              className="form-control"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Project Name</label>
            <input
              className="form-control"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>

          <div className="col-12">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Responsible Person</label>
            <input
              className="form-control"
              value={responsible}
              onChange={(e) => setResponsible(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Deadline</label>
            <input
              type="date"
              className="form-control"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Priority</label>
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
            <label className="form-label">Status</label>
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

          <div className="col-6">
            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>

          <div className="col-6">
            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTaskModal;