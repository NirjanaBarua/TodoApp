import React, { useState } from "react";
import useTaskStore from "../../Context/States/taskStore";



const TodoInput = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  
  const addToTask = useTaskStore((state) => state.addToTask);

  const handleAddTask: React.FormEventHandler = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      taskname: task,
      status: "In-Progress",  
    }

    addToTask(newTask);
    setTask("");
    setStatus("");
    setIsOpen(false);
  };

  

  return (
    <div className="flex justify-center items-center bg-gray-100">
      {/* Card with + sign */}
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer"
      >
        <span className="text-5xl text-white bg-gray-800">+</span>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center  ">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
              Add a New Task
            </h2>
            <form onSubmit={handleAddTask} className="space-y-4">
              <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
                placeholder="Enter your task..."
              />
              
              <input
                type="text"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 border border-gray-300 text-gray-900 border rounded-lg focus:outline-none focus:ring focus:ring-purple-300"
                placeholder="Enter your status..."
              />
              
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition duration-200"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoInput;
