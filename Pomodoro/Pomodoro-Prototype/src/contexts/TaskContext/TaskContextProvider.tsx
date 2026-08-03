import { useState } from "react";
import { inicialTaskState } from "./inicialTaskState";
import { TaskContext } from "./TaskContext";

type TaskProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskProviderProps) {
    const [state, setState] = useState(inicialTaskState);
    return (
        <TaskContext.Provider value={{ state, setState }}>
            {children}
        </TaskContext.Provider>
    );
}