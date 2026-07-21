import { useTaskDetails } from "../bll/useTasksDetails"
import styles from './TaskDetails.module.css'

type Props = {
    taskId: string | null
    boardId: string | null
}

export function TaskDetails({ taskId, boardId }: Props) {
    const { taskDetails } = useTaskDetails(taskId, boardId)


    return (
        <div className={styles.task}>
            <h2>Task Details</h2>
            {!taskId && !taskDetails && <div>Task is not selected</div>}
            {taskId && !taskDetails && <div>Loading...</div>}
            {taskDetails && (
                <ul>
                    <li>title - {taskDetails.attributes.title}</li>
                    <li>boardTitle - {taskDetails.attributes.boardTitle}</li>
                    <li>description - {taskDetails.attributes.description ?? 'No description'}</li>
                </ul>
            )}
        </div>
    )
}
