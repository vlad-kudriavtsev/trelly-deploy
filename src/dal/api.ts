type TaskDetailsDtoTaskDetailsDto = {
    id: string
    title: string | null
    description: string | null
    boardId: string
    boardTitle: string
    order: number
    status: number
    priority: number
    startDate: string | null
    deadline: string | null
    addedAt: string
    updatedAt: string
    attachments: Array<string>
}

export type TaskDetailsData = {
    id: string
    type: string
    attributes: TaskDetailsDtoTaskDetailsDto
}

type GetTaskOutput = {
    data: TaskDetailsData
}

export const getTask = (taskId: string , boardId: string | null) => {
    const promise: Promise<GetTaskOutput> = fetch('https://trelly.it-incubator.app/api/1.0/boards/' + boardId + '/tasks/' + taskId, {
            headers: {
                // "api-key": "950f0fcb-ae03-410c-a87a-bde9db750e61",
            }
        }).then(res => res.json())

    return promise
}


type GlobalTaskListItemDto = {
    id: string
    title: string | null
    boardId: string
    status: number
    priority: number
    addedAt: string
    attachmentsCount: number

}

export type GlobalTaskListItemJsonApiData = {
    id: string
    type: string
    attributes: GlobalTaskListItemDto
}

export type GlobalTaskListResponse = {
    data: Array<GlobalTaskListItemJsonApiData>
}


export const getTasks = () => {
    const promise: Promise<GlobalTaskListResponse> = fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks', {
            headers: {
                // "api-key": "950f0fcb-ae03-410c-a87a-bde9db750e61",
            }
        }).then(res => res.json())

    return promise
}