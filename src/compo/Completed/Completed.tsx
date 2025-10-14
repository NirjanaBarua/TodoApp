import useTaskStore from "../../Context/States/taskStore";


const Completed = () => {
        const { task } = useTaskStore();
        const completedTask = task.filter((st)=>st.status==="Completed");
    return (
         <div className="min-h-screen bg-black">
            <h1 className="text-center mb-6  text-white font-bold">Completed Tasks</h1>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                {completedTask.length === 0 ? (
                    <p className="text-white text-center font-semibold">No Completed tasks yet</p>
                ) : (
                    completedTask.map((task) => (

                        <div className="card w-96 bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 card-lg shadow-sm">

                            <div className="card-body text-white">
                                <h2 className="card-title">{task.taskname}</h2>
                                <p>{task.status}</p>
                                <div className="place-items-center">
                                    <div
                                        className=" card-actions radial-progress text-green-400"
                                        style={
                                            {

                                                "--value": "100",
                                                "--size": "5rem",
                                                "--thickness": "6px",
                                            } as React.CSSProperties
                                        }
                                    >
                                        100%
                                    </div>
                                </div>

                            </div>
                        </div>

                    )
                    )

                )}

            </div>

        </div>
    );
};

export default Completed;