import { useEffect } from 'react'

import { Flex } from '@mantine/core'

import { useAppDispatch, useAppSelector } from '../../app/hooks.ts'
import { Todolist } from '../../components/ui/todolist'
import { todolistsActions } from '../../services/reducers/todolist.reducer.ts'

export const TodolistsPage = () => {
  const dispatch = useAppDispatch()
  const todolists = useAppSelector(state => state.todolists)
  const tasks = useAppSelector(state => state.tasks)

  useEffect(() => {
    dispatch(todolistsActions.getTodolists())
  }, [])
  const todolistsRender = todolists.map(tl => (
    <Todolist key={tl.id} title={tl.title} tasks={tasks[tl.id]} />
  ))

  return (
    <Flex wrap={'wrap'} gap={50} align={'flex-start'}>
      {todolistsRender}
    </Flex>
  )
}
