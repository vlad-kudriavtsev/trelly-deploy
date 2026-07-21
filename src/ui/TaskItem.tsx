import clsx from "clsx"
import type { GlobalTaskListItemJsonApiData } from "../dal/api"
import styles from './TaskItem.module.css'

type Props = {
    task: GlobalTaskListItemJsonApiData
    isSelected: boolean
    onSelect: (taskId: string, boardId: string) => void
}

export function TaskItem({ onSelect, task, isSelected }: Props) {
    const handleSelect = () => {
        onSelect?.(task.id, task.attributes.boardId)
    }

    // const className = `${styles.task} ${styles.default} ${(task.attributes.priority === 5 && styles.highPriority) || (task.attributes.priority === 1 && styles.lowPriority)} ${isSelected && styles.selected}`

    const taskClassName = clsx({
        [styles.task]: true,
        [styles.default]: true,
        [styles.selected]: isSelected,
        [styles.priority_0]: task.attributes.priority === 0,
        [styles.priority_1]: task.attributes.priority === 1,
        [styles.priority_2]: task.attributes.priority === 2,
        [styles.priority_3]: task.attributes.priority === 3,
        [styles.priority_4]: task.attributes.priority === 4,
    })

    const titleClassName = clsx({
        [styles.title]: true
    })

    return (
        <li
            className={taskClassName}
            // style={{
            //     backgroundColor: task.attributes.priority === 0 ? '#ffffff' :
            //         task.attributes.priority === 1 ? '#ffd7b5' :
            //             task.attributes.priority === 2 ? '#ffb38a' :
            //                 task.attributes.priority === 3 ? '#ff9248' :
            //                     '#ff6700',
            //     border: isSelected ? '5px solid blue' : ''
            // }}
            onClick={handleSelect}
        >
            <div >
                <b>Заголовок</b>: <span className={titleClassName}>{task.attributes.title}</span>
            </div>
            <div>
                <strong>
                    Статус:
                </strong>
                <input type="checkbox" checked={task.attributes.status === 2} readOnly />

            </div>
            <div>
                <strong>Дата создания задача: </strong> {new Date(task.attributes.addedAt).toLocaleDateString()}
            </div>
        </li>
    )
}