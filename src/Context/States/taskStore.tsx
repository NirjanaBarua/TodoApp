
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type taskItem = {
    id: number;
    taskname: string;
}

type taskStore = {
    task: taskItem[];
    addToTask: (item: taskItem) => void;
    deleteTask: (id: number) => void;
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
        }),
        {
            name:"taskStore",
        }
        
    ));

export default useTaskStore;