import '../App.css'
import { useTasks } from '../bll/useTasks';
import { TaskItem } from "./TaskItem";

type Props = {
    selectedTaskId: string | null
    onSelect: (taskIdid: string | null, boardId: string | null) => void
}

export function TasksList({ onSelect, selectedTaskId }: Props) {
    const { tasks } = useTasks()


    const handleSelect = (taskId: string, boardId: string) => {
        onSelect?.(taskId, boardId)
    }

    const handleReset = () => {
        onSelect?.(null, null)
    }



    if (tasks === null) {
        return <h2>Loading...</h2>
    }

    if (tasks.length === 0) {
        return <h2>Задачи отстутсвуют</h2>
    }

    return (
        <>
            <button onClick={handleReset}>Reset</button>
            <ul className='task-list'>
                {
                    tasks.map(task => {
                        return (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onSelect={handleSelect}
                                isSelected={task.id === selectedTaskId} />
                        )
                    }
                    )
                }
            </ul>
        </>
    )
}