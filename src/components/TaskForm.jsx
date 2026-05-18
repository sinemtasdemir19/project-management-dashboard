function TaskForm() {
  return (

    <div className="card shadow mb-4">

      <div className="card-header">
        Add New Task
      </div>

      <div className="card-body">

        <form className="row g-3">

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Task name"
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Project name"
            />
          </div>

          <div className="col-md-6">
            <input
              className="form-control"
              placeholder="Responsible person"
            />
          </div>

          <div className="col-md-6">
            <input
              type="date"
              className="form-control"
            />
          </div>

          <div className="col-12">
            <button
              type="button"
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