import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { inicialTaskState } from "./inicialTaskState";

type TaskContextProps = {
    state: TaskStateModel;
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
    state: inicialTaskState,
    setState: () => { },
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);