import { useState } from "react";

function TaskList({ tasks, onDeleteTask, onEditTask }) {
  const [searchText, setSearchText] = useState("");
  const [sortType, setSortType] = useState("");

  const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  const filteredTasks = tasks
    .filter((task) => {
      const searchValue = searchText.toLowerCase();

      return (
        task.taskName.toLowerCase().includes(searchValue) ||
        task.projectName.toLowerCase().includes(searchValue) ||
        task.responsible.toLowerCase().includes(searchValue) ||
        task.description.toLowerCase().includes(searchValue)
      );
    })
    .sort((a, b) => {
      if (sortType === "deadline") {
        return new Date(a.deadline) - new Date(b.deadline);
      }

      if (sortType === "priority") {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }

      return 0;
    });

  return (
    <div className="card custom-card">
      <div className="card-header custom-header">
        Task List
      </div>

      <div className="card-body p-4">
        {tasks.length === 0 ? (
          <div className="empty-state text-center">
            <h5>No task added yet</h5>
            <p className="mb-0">
              Add your first project task using the form above.
            </p>
          </div>
        ) : (
          <>
            <div className="task-filter-bar mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search task..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <select
                className="form-select"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="">Sort Tasks</option>
                <option value="deadline">Sort by Deadline</option>
                <option value="priority">Sort by Priority</option>
              </select>
            </div>

            {filteredTasks.length === 0 ? (
              <div className="empty-state text-center">
                <h5>No matching task found</h5>
                <p className="mb-0">
                  Try searching with another keyword.
                </p>
              </div>
            ) : (
              <div className="row">
                {filteredTasks.map((task, index) => (
                  <div className="col-md-6 mb-4" key={task.id}>
                    <div className="task-card-modern h-100">
                      <div className="task-card-top">
                        <span className="task-number">
                          Task #{index + 1}
                        </span>

                        <div className="task-badges">
                          <span className="badge-purple">
                            {task.status}
                          </span>

                          <span className="badge-lavender">
                            {task.priority}
                          </span>
                        </div>
                      </div>

                      <h5 className="task-title mt-3">
                        {task.taskName}
                      </h5>

                      <p className="task-project">
                        {task.projectName}
                      </p>

                      <p className="task-description">
                        {task.description || "No description added."}
                      </p>

                      <div className="task-details">
                        <div className="task-detail-item">
                          <span>Responsible</span>
                          <strong>{task.responsible}</strong>
                        </div>

                        <div className="task-detail-item">
                          <span>Deadline</span>
                          <strong>
                            {new Date(task.deadline)
                                .toLocaleDateString(
                                "tr-TR",
                                {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                }
                                )}
                          </strong>
                        </div>
                      </div>

                      <div className="task-actions">
                        <button
                          className="btn btn-edit-soft"
                          onClick={() => onEditTask(task)}
                        >
                          Edit
                        </button>

                        <button
                          className="btn btn-delete-soft"
                          onClick={() => onDeleteTask(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default TaskList;