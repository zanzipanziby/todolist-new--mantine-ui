import { ActionIcon, Checkbox, Flex, Text } from '@mantine/core'
import { IconTrashFilled } from '@tabler/icons-react'

type TaskPropsType = {
  title: string
  isDone: boolean
}

export const Task = ({ title, isDone }: TaskPropsType) => {
  return (
    <li>
      <Flex justify={'space-between'} align={'center'}>
        <Flex justify={'space-between'} align={'center'} gap={'xs'}>
          <Checkbox checked={isDone} />
          <Text color={isDone ? 'gray' : ''}>{title}</Text>
        </Flex>
        <ActionIcon>
          <IconTrashFilled />
        </ActionIcon>
      </Flex>
    </li>
  )
}
