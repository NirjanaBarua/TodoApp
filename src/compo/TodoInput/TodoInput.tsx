import  { useState } from "react";
import useTaskStore from "../../Context/States/taskStore";
import { CrossIcon } from "lucide-react";

const TodoInput = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const addToTask = useTaskStore((state) => state.addToTask);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      taskname: task,
      status: "In-Progress",
    };
    addToTask(newTask);
    setTask("");
    setStatus("");
    // Close the modal after submission
    document.getElementById("add_task_modal").checked = false;
  };

  return (
    <div className="flex justify-center items-center">
      {/* Button to open modal */}
      <label htmlFor="add_task_modal">
        <CrossIcon className="mt-2 cursor-pointer bg-gray-800 hover:bg-gray-900 w-8 h-8 p-1 rounded-md text-white" />
      </label>
      

      {/* Modal */}
      <input type="checkbox" id="add_task_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box bg-[#1c2733] text-white">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Add a New Task
          </h2>
          <form onSubmit={handleAddTask} className="space-y-4">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#243447] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your task..."
            />

            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-[#243447] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your status..."
            />

            <div className="flex justify-end gap-3">
              <label
                htmlFor="add_task_modal"
                className="px-4 py-2 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-700 cursor-pointer"
              >
                Cancel
              </label>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition duration-200"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="add_task_modal"></label>
      </div>
    </div>
  );
};

export default TodoInput;
