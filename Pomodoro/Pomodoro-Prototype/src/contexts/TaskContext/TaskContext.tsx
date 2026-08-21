import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { inicialTaskState } from "./inicialTaskState";
import type { TaskActionModel } from "./taskActions";

type TaskContextProps = {
    state: TaskStateModel;
    dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
    state: inicialTaskState,
    dispatch: () => { },
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);