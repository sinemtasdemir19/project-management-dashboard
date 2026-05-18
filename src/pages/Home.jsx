import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Home() {
  return (
    <div className="container py-5">

      <div className="text-center mb-5">
        <h1 className="fw-bold">
          Project Management Dashboard
        </h1>

        <p className="text-muted">
          Task tracking and management application
        </p>
      </div>

      <div className="row mb-4">

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5>Total Tasks</h5>
              <h2>0</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5>Pending</h5>
              <h2>0</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5>In Progress</h5>
              <h2>0</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5>Completed</h5>
              <h2>0</h2>
            </div>
          </div>
        </div>

      </div>

      <TaskForm />

      <TaskList />

    </div>
  );
}

export default Home;