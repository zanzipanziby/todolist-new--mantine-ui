import { Checkbox, Text } from '@radix-ui/themes'

type TaskPropsType = {
  title: string
  isDone: boolean
}

export const Task = ({ title, isDone }: TaskPropsType) => {
  return (
    <li>
      <Text>{title}</Text>
      <Checkbox checked={isDone} />
    </li>
  )
}
