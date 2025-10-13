import {  Edit, X } from "lucide-react";
import useTaskStore from "../../Context/States/taskStore";


export type TaskProps = {
    task: {
        id: number;
        taskname: string;
    }
}




const TodoItem = ({ task }: TaskProps) => {

    const deleteTask = useTaskStore((state) => state.deleteTask);

  
    return (
        <div className="flex justify-center">
            <div className="card w-[800px] h-38 card-sm shadow-md mt-4 bg-gray-700 hover:bg-gray-800"  >
                <div className="card-body text-white">
                    <h2 className="card-title">{task.taskname}</h2>
                    <div className="justify-around card-actions">
                        <Edit></Edit>
                        <X onClick={() => deleteTask(task.id)}></X>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TodoItem;