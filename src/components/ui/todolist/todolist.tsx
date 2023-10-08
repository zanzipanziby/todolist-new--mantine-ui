import { Flex, Paper, Title } from '@mantine/core'

import { useAppDispatch, useAppSelector } from '../../../app/hooks.ts'
import { TaskStatuses } from '../../../services/api/types.ts'
import { tasksActions } from '../../../services/reducers/tasks.reducer.ts'
import { AddItem } from '../add-item'
import { ButtonGroupComponent } from '../button-group'
import { Task } from '../task'

type TodolistPropsType = {
  todolistId: string
  title: string
}

export const Todolist = ({ title, todolistId }: TodolistPropsType) => {
  const tasks = useAppSelector(state => state.tasks[todolistId])
  const dispatch = useAppDispatch()
  const removeTask = (taskId: string) => {
    dispatch(tasksActions.removeTask({ todolistId, taskId }))
  }

  const tasksRender = tasks.map(el => (
    <Task
      key={el.id}
      title={el.title}
      isDone={el.status === TaskStatuses.Completed}
      remove={() => removeTask(el.id)}
    />
  ))

  return (
    <Paper shadow="xs" p="md" withBorder maw={350}>
      <Flex direction={'column'} gap={20}>
        <Title ta={'center'} order={2}>
          {title}
        </Title>
        <AddItem placeholder={'New task'} onClick={() => {}} fullWidth />
        <ul>{tasksRender}</ul>
        <Flex justify={'center'}>
          <ButtonGroupComponent filterValue={'all'} callback={() => {}} />
        </Flex>
      </Flex>
    </Paper>
  )
}
