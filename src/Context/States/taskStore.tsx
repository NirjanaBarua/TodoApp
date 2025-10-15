
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type taskItem = {
    id: number;
    taskname: string;
    status: "In-Progress" | "Completed";
    isEditing?: boolean; 

}

type taskStore = {
    task: taskItem[];
    addToTask: (item: taskItem) => void;
    editTask: (id: number,item: taskItem) => void;
    deleteTask: (id: number) => void;
    toggleStatus: (id: number) => void;
}

const useTaskStore = create<taskStore>()(
    persist(
        (set) => ({
            task: [],
            addToTask: (item) => set((state) => ({
                task: [...state.task, item],
            })),

            editTask:(id,updatedData)=>set((state)=>({
                task: state.task.map((t) => t.id === id ? {
                    ...t,...updatedData
                } : t)
            })),

            deleteTask: (id) => set((state) => ({
                task: state.task.filter((t) => t.id !== id),
            })),

            toggleStatus: (id) => set((state) => ({
                task: state.task.map((t) => t.id === id ? {
                    ...t,
                    status: t.status === "In-Progress" ? "Completed" : "In-Progress",
                } : t)
            }

            ))
        }),
        {
            name: "taskStore",
        }

    ));

export default useTaskStore;