import { Flex, Paper, Title } from '@mantine/core'

import { TaskServerResponseType, TaskStatuses } from '../../../services/api/types.ts'
import { AddItem } from '../add-item'
import { ButtonGroupComponent } from '../button-group'
import { Task } from '../task'

type TodolistPropsType = {
  title: string
  tasks: TaskServerResponseType[]
}

export const Todolist = ({ title, tasks }: TodolistPropsType) => {
  const tasksRender = tasks.map(el => (
    <Task key={el.id} title={el.title} isDone={el.status === TaskStatuses.Completed} />
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
