import { ActionIcon, Flex, Input } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

type AddItemPropsType = {
  placeholder: string
  onClick: () => void
  fullWidth?: boolean
}

export const AddItem = ({ placeholder, onClick, fullWidth }: AddItemPropsType) => {
  return (
    <Flex align={'center'} gap={'sm'}>
      <Input placeholder={placeholder} w={fullWidth ? '100%' : 'inherit'} />
      <ActionIcon onClick={onClick}>
        <IconPlus />
      </ActionIcon>
    </Flex>
  )
}
