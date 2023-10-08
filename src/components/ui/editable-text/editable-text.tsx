import { useState } from 'react'

import { Input, Text } from '@mantine/core'

type EditableTextPropsType = {
  title: string
  callback: (title: string) => void
}

export const EditableText = ({ title, callback }: EditableTextPropsType) => {
  const [editMode, setEditMode] = useState(false)
  const [error, setError] = useState(null as null | string)
  const [inputValue, setInputValue] = useState(title)

  const onChangeHandler = (value: string) => {
    setInputValue(value)
  }

  const onBlurHandler = () => {
    if (inputValue.trim()) {
      callback(inputValue.trim())
      setEditMode(false)
    } else {
      setError('Enter Value')
      setEditMode(false)
    }
  }

  if (editMode) {
    return (
      <Input
        error={error}
        type={'text'}
        // variant={'unstyled'}
        value={inputValue}
        onChange={e => onChangeHandler(e.currentTarget.value)}
        onBlur={onBlurHandler}
      />
    )
  }

  return <Text onDoubleClick={() => setEditMode(true)}>{title}</Text>
}
