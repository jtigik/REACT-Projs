import { useEffect, useReducer } from "react";
import { TimerWorkerManager } from "../../workers/TimerWorkerManager";
import { initialTaskState } from "./initialTaskState";
import { TaskActionTypes } from "./taskActions";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";

type TaskContextProviderProps = {
    children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);

    useEffect(() => {
        if (!state.activeTask) return;

        const worker = TimerWorkerManager.getInstance();

        worker.onmessage((e) => {
            const countDownSeconds = e.data as number;

            if (countDownSeconds <= 0) {
                dispatch({ type: TaskActionTypes.COMPLETE_TASK });
                worker.terminate();
                return;
            }

            dispatch({
                type: TaskActionTypes.COUNT_DOWN,
                payload: { secondsRemaining: countDownSeconds },
            });
        });

        worker.postMessage(state);

        return () => {
            worker.terminate();
        };
    }, [state.activeTask]); // não usar [state]

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}