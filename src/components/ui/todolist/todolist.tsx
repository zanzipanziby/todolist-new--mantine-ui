import { Flex, Paper, Title } from '@mantine/core'

import { TaskServerResponseType, TaskStatuses } from '../../../services/api/types.ts'
import { AddItem } from '../add-item'
import { ButtonGroupComponent } from '../button-group'
import { Task } from '../task'

type TodolistPropsType = {
  todolistId: string
  title: string
  tasks: TaskServerResponseType[]
  removeTask: (arg: { todolistId: string; taskId: string }) => void
  addTask: (arg: { todolistId: string; title: string }) => void
}

export const Todolist = ({ title, todolistId, tasks, removeTask, addTask }: TodolistPropsType) => {
  const removeTaskHandle = (taskId: string) => {
    removeTask({ todolistId, taskId })
  }
  const addTaskHandle = (title: string) => {
    addTask({ todolistId, title })
  }

  const tasksRender = tasks.map(el => (
    <Task
      key={el.id}
      title={el.title}
      isDone={el.status === TaskStatuses.Completed}
      remove={() => removeTaskHandle(el.id)}
    />
  ))

  return (
    <Paper shadow="xs" p="md" withBorder maw={350}>
      <Flex direction={'column'} gap={20}>
        <Title ta={'center'} order={2}>
          {title}
        </Title>
        <AddItem placeholder={'New task'} callback={addTaskHandle} fullWidth />
        <ul>{tasksRender}</ul>
        <Flex justify={'center'}>
          <ButtonGroupComponent filterValue={'all'} callback={() => {}} />
        </Flex>
      </Flex>
    </Paper>
  )
}
