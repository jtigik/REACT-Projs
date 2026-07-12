import type { TaskModel } from "./TaskModel";

// This file defines the TaskStateModel type, which represents the state of a task in the application.
export type TaskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number; // Seconds remaining for the current task
    formattedSecondsRemaining: string; // Formatted string of seconds remaining (e.g., "00:25:00")
    activeTask: TaskModel | null; // The currently active task, or null if no task is active
    currentCycle: number; // The current cycle number (e.g., 1 for the first cycle)
    config: {
        workTime: number; // Configured work time in minutes
        shortBreakTime: number; // Configured short break time in minutes
        longBreakTime: number; // Configured long break time in minutes
    };
};