import useTaskStore from "../../Context/States/taskStore";


const Completed = () => {
        const { task } = useTaskStore();
    return (
         <div className="bg-black">
            <h1 className="text-center mb-6  text-white font-bold">Completed Tasks</h1>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
                {task.length === 0 ? (
                    <p className="text-gray-500 text-center">No Completed tasks yet</p>
                ) : (
                    task.filter((st) => st.status === "Completed").map((task) => (

                        <div className="card w-96 bg-gray-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-900 card-lg shadow-sm">

                            <div className="card-body text-white">
                                <h2 className="card-title">{task.taskname}</h2>
                                <p>{task.status}</p>
                                <div className="place-items-center">
                                    <div
                                        className=" card-actions radial-progress text-green-400"
                                        style={
                                            {

                                                "--value": "85",
                                                "--size": "5rem",
                                                "--thickness": "6px",
                                            } as React.CSSProperties
                                        }
                                    >
                                        85%
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