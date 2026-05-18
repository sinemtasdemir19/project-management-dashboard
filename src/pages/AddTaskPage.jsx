import TaskForm from "../components/TaskForm";

function AddTaskPage({ onAddTask, onCancel }) {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold dashboard-title">
          Add New Task
        </h1>

        <p className="dashboard-subtitle">
          Create a new project task and add it to your dashboard.
        </p>
      </div>

      <TaskForm
        onAddTask={onAddTask}
        onCancel={onCancel}
      />
    </div>
  );
}

export default AddTaskPage;