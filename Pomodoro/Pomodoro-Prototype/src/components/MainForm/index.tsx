import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskModel } from "../../models/TaskModel";
import { getNextCycle } from "../../utils/getNextCycle";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (taskNameInput.current === null) return;

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Digite o nome da tarefa');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType,
        };

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: { ...prevState.config },
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining, // Conferir
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining), // Conferir
                tasks: [...prevState.tasks, newTask],
            };
        });
    }

    return (
        <form className="form" action="" onSubmit={handleCreateNewTask}>
            <div className="formRow">
                <DefaultInput
                    labelText="Task"
                    id="myInput"
                    type='text'
                    placeholder="Enter your task"
                    ref={taskNameInput}
                    disabled={!!state.activeTask} // Desativando o input se tem task ativa 
                />
            </div>
            <div className="formRow">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="formRow">
                <Cycles />
            </div>
            <div className="formRow">
                {!state.activeTask ? (
                    <DefaultButton
                        aria-label='Iniciar nova tarefa'
                        title='Iniciar nova tarefa'
                        type='submit'
                        icon={<PlayCircleIcon />}
                    />
                ) : (
                    <DefaultButton
                        aria-label='Interromper tarefa atual'
                        title='Interromper tarefa atual'
                        type='button'
                        color='red'
                        icon={<StopCircleIcon />}
                    />
                )}
            </div>
        </form>
    );
}