
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type taskItem = {
    id: number;
    taskname: string;
    status: "In-Progress" | "Completed";
    isEditing?: boolean; 

}

export type taskStore = {
    task: taskItem[];
    addToTask: (item: taskItem) => void;
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