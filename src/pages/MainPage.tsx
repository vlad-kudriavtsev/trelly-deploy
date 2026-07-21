import { TaskDetails } from "../ui/TaskDetails";
import { TasksList } from "../ui/TasksList";
import { useTaskSelection } from "../bll/useTaskSelection";

import styles from './MainPage.module.css'

export function MainPage() {
    const { selectedTaskId, setSelectedTaskId, boardId, setBoardId } = useTaskSelection()

    const handleSelect = (taskId: string | null, boardId: string | null) => {
        setSelectedTaskId(taskId)
        setBoardId(boardId)
    }

    return (
        <div className={styles.container}>
            <h1>trelly </h1>
            <TasksList selectedTaskId={selectedTaskId} onSelect={handleSelect} />
            <TaskDetails taskId={selectedTaskId} boardId={boardId} />
        </div>
    )
}