
import TodoInput from '../TodoInput/TodoInput';
import TodoList from '../TodoList/TodoList';
import { Calculator, CheckCircle, Clock } from 'lucide-react';
import useTaskStore from '../../Context/States/taskStore';

const Home = () => {

const {task}=useTaskStore();
const activeTask = task.filter((st)=>st.status==="In-Progress");
const completedTask = task.filter((st)=>st.status==="Completed");

    return (
        <>
            <div className=" bg-black container mx-auto p-4">
                <h1 className="text-center mb-6  text-white font-bold">All Tasks</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ml-70 mr-70">
                    {/* Card 1: Add Task */}
                    <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 text-white min-h-[230px] ">
                        <h2 className="text-lg font-bold">Add Task</h2>
                        <TodoInput></TodoInput>
                    </div>
                    {/* Card 2: Remaining */}
                    <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 text-white min-h-[230px]">
                        <h2 className="text-lg font-bold">Remaining : {activeTask.length} </h2>
                        <Clock className="w-8 h-8 mt-2" ></Clock>
                    </div>
                    {/* Card 3: Completed */}
                    <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 text-white min-h-[230px] ">
                        <h2 className="text-lg font-bold">Completed : {completedTask.length}</h2>
                        <CheckCircle className="w-8 h-8 mt-2"></CheckCircle>
                    </div>
                    {/* Card 4: Total */}
                    <div className="flex flex-col items-center justify-center p-6 rounded-xl shadow-md bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 text-white min-h-[230px]">
                        <h2 className="text-lg font-bold">Total : {task.length}</h2>
                        <Calculator className="w-8 h-8 mt-2"></Calculator>
                    </div>
                </div>
            </div>
            <TodoList></TodoList>
        </>
    );
};

export default Home;