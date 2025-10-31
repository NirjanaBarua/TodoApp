import {  X } from "lucide-react";
import useTaskStore from "../../Context/States/taskStore";




export type TaskProps = {
    task: {
        id: number;
        taskname: string;
        status: string;
        isEditing?: boolean; 

    }
}


const TodoItem = ({ task }: TaskProps) => {

    
    const deleteTask = useTaskStore((state) => state.deleteTask);
    const toggleStatus = useTaskStore((state) => state.toggleStatus);




    return (
        <div className="flex justify-center">
            <div className="card w-[800px] h-38 card-sm shadow-md mt-4 bg-gray-700 hover:bg-gray-800"  >
                <div className="card-body text-white">
                    <div className="flex items-center gap-2">
                        <input
                            onChange={() => toggleStatus(task.id)}
                            type="checkbox"
                            checked={task.status === "Completed"}
                            className="w-4 h-4 bg-blue-400" />
                        <h2 className="card-title">{task.taskname}</h2>
                    </div>

                    <p>{task.status}</p>
                    <div className="justify-around card-actions">

                        
                        <X onClick={() => deleteTask(task.id)}></X>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default TodoItem;