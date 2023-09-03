import { Button, Group } from '@mantine/core'

import { FilterValueType } from '../../../app/types.ts'

import s from './button-group.module.scss'

type ButtonGroupComponentPropsType = {
  filterValue: FilterValueType
  callback: (value: FilterValueType) => void
}
export const ButtonGroupComponent = ({ callback, filterValue }: ButtonGroupComponentPropsType) => {
  return (
    <Group spacing={0} className={s.buttonGroup}>
      <Button
        radius={0}
        uppercase
        onClick={() => callback('all')}
        variant={filterValue === 'all' ? 'filled' : 'outline'}
      >
        All
      </Button>
      <Button
        radius={0}
        uppercase
        onClick={() => callback('active')}
        variant={filterValue === 'active' ? 'filled' : 'outline'}
      >
        Active
      </Button>
      <Button
        radius={0}
        uppercase
        onClick={() => callback('completed')}
        variant={filterValue === 'completed' ? 'filled' : 'outline'}
      >
        Completed
      </Button>
    </Group>
  )
}
