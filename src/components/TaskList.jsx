function TaskList({ tasks }) {
  return (
    <div className="card shadow">

      <div className="card-header">
        Task List
      </div>

      <div className="card-body">

        {tasks.length === 0 ? (
          <p className="text-muted">
            No task added yet
          </p>
        ) : (
          <div className="row">
            {tasks.map((task) => (
              <div className="col-md-6 mb-3" key={task.id}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">

                    <h5 className="card-title">
                      {task.taskName}
                    </h5>

                    <p className="mb-1">
                      <strong>Project:</strong> {task.projectName}
                    </p>

                    <p className="mb-1">
                      <strong>Responsible:</strong> {task.responsible}
                    </p>

                    <p className="mb-1">
                      <strong>Deadline:</strong> {task.deadline}
                    </p>

                    <p className="mb-1">
                      <strong>Priority:</strong> {task.priority}
                    </p>

                    <p className="mb-0">
                      <strong>Status:</strong> {task.status}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </div>
  );
}

export default TaskList;