import { useEffect, useState } from "react";
import { getTasks, type GlobalTaskListItemJsonApiData } from "../dal/api";

export function useTasks() {
    const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null)

    useEffect(() => {
        console.log('effect');

        getTasks().then(json => setTasks(json.data))
    }, [])

    return {
        tasks
    }
}