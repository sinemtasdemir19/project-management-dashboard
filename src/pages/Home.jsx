import TaskList from "../components/TaskList";
import EditTaskModal from "../components/EditTaskModal";

function Home({
  tasks,
  onDeleteTask,
  onEditTask,
  onUpdateTask,
  selectedTask,
  goToAddPage
}) {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold dashboard-title">
          Project Management Dashboard
        </h1>

        <p className="dashboard-subtitle">
          Manage your project tasks with a modern React CRUD dashboard
        </p>
      </div>

      <div className="row mb-4">

        <div className="col-md-3 mb-3">
          <div className="card stat-card">
            <div className="card-body text-center">
              <h5>Total Tasks</h5>
              <h2>{tasks.length}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card stat-card">
            <div className="card-body text-center">
              <h5>Pending</h5>

              <h2>
                {
                  tasks.filter(
                    task =>
                    task.status ===
                    "Pending"
                  ).length
                }
              </h2>

            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card stat-card">
            <div className="card-body text-center">

              <h5>In Progress</h5>

              <h2>
                {
                  tasks.filter(
                    task =>
                    task.status ===
                    "In Progress"
                  ).length
                }
              </h2>

            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card stat-card">
            <div className="card-body text-center">

              <h5>Completed</h5>

              <h2>
                {
                  tasks.filter(
                    task =>
                    task.status ===
                    "Completed"
                  ).length
                }
              </h2>

            </div>
          </div>
        </div>

      </div>

      <div className="d-flex justify-content-end mb-4">

        <button
          className="btn btn-primary px-4"
          onClick={goToAddPage}
        >
          + Add New Task
        </button>

      </div>

      <TaskList
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />

      <EditTaskModal
        selectedTask={selectedTask}
        onUpdateTask={onUpdateTask}
        onClose={() => onEditTask(null)}
     />

    </div>
  );
}

export default Home;