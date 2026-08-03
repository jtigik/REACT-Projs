
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./styles.module.css";

export function CountDown() {
    const taskContext = useTaskContext();
    console.log("CountDown taskContext:", taskContext);

    return (
        <div className={styles.container}>
            <span>{taskContext.state.formattedSecondsRemaining}</span>
        </div>
    );
}
