import { useState } from 'react';
import useTaskStore from '../../Context/States/taskStore';


const EditInput = () => {
    const [edittask, setEditTask] = useState("");
    const [editstatus, setEditStatus] = useState("");
    const editTask = useTaskStore((state) => state.editTask);

    const handleEditTask = (e) => {
        e.preventDefault();
        const editTask = {
            id: Date.now(),
            taskname: edittask,
            status: "In-Progress",
        };
        editTask(editTask.id,editTask);
        setEditTask("");
        setEditStatus("");
        // Close the modal after submission
        document.getElementById("add_task_modal").checked = false;
    };
    return (
        <div>
            <div className="flex justify-center items-center">
                {/* Button to open modal */}
               
                {/* Modal */}
                <input type="checkbox" id="add_task_modal" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box bg-[#1c2733] text-white">
                        <h2 className="text-xl font-semibold mb-4 text-center">
                            Update the Task
                        </h2>
                        <form onSubmit={handleEditTask} className="space-y-4">
                            <input
                                type="text"
                                value={edittask}
                                onChange={(e) => setEditTask(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-[#243447] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Enter your updated task..."
                            />

                            <input
                                type="text"
                                value={editstatus}
                                onChange={(e) => setEditStatus(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg bg-[#243447] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                                placeholder="Enter your updated status..."
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
        </div>
    );
};

export default EditInput;