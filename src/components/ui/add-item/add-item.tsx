import { ChangeEvent, useState } from 'react'

import { ActionIcon, Flex, Input } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'

type AddItemPropsType = {
  placeholder: string
  callback: (title: string) => void
  fullWidth?: boolean
}

export const AddItem = ({ placeholder, callback, fullWidth }: AddItemPropsType) => {
  const [title, setTitle] = useState('')
  const [error, setError] = useState(null as null | string)
  const onClickHandle = () => {
    if (!title.trim()) {
      setError('Enter value')
    } else {
      callback(title.trim())
    }
  }
  const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setTitle(e.currentTarget.value)
  }

  return (
    <Flex align={'center'} gap={'sm'}>
      <Input
        placeholder={error ? error : placeholder}
        w={fullWidth ? '100%' : 'inherit'}
        onChange={onChangeHandle}
        error={error}
      />
      <ActionIcon onClick={onClickHandle}>
        <IconPlus />
      </ActionIcon>
    </Flex>
  )
}
