import { useEffect } from 'react'

import { Flex } from '@mantine/core'

import { useAppDispatch, useAppSelector } from '../../app/hooks.ts'
import { Todolist } from '../../components/ui/todolist'
import { tasksActions } from '../../services/reducers/tasks.reducer.ts'
import { todolistsActions } from '../../services/reducers/todolist.reducer.ts'

export const TodolistsPage = () => {
  const dispatch = useAppDispatch()
  const todolists = useAppSelector(state => state.todolists)
  const tasks = useAppSelector(state => state.tasks)

  const removeTask = (arg: { todolistId: string; taskId: string }) => {
    dispatch(tasksActions.removeTask(arg))
  }

  const addTask = (arg: { todolistId: string; title: string }) => {
    dispatch(tasksActions.addTask(arg))
  }

  useEffect(() => {
    dispatch(todolistsActions.getTodolists())
  }, [])
  const todolistsRender = todolists.map(tl => (
    <Todolist
      key={tl.id}
      title={tl.title}
      todolistId={tl.id}
      tasks={tasks[tl.id]}
      removeTask={removeTask}
      addTask={addTask}
    />
  ))

  return (
    <Flex wrap={'wrap'} gap={50} align={'flex-start'}>
      {todolistsRender}
    </Flex>
  )
}
