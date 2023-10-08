import { ActionIcon, Checkbox, Flex, Text } from '@mantine/core'
import { IconTrashFilled } from '@tabler/icons-react'

type TaskPropsType = {
  title: string
  isDone: boolean
  remove: () => void
}

export const Task = ({ title, isDone, remove }: TaskPropsType) => {
  return (
    <li>
      <Flex justify={'space-between'} align={'center'}>
        <Flex justify={'space-between'} align={'center'} gap={'xs'}>
          <Checkbox checked={isDone} />
          <Text color={isDone ? 'gray' : ''}>{title}</Text>
        </Flex>
        <ActionIcon onClick={remove}>
          <IconTrashFilled />
        </ActionIcon>
      </Flex>
    </li>
  )
}
