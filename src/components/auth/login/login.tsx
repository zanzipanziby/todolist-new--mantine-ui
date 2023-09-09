import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Checkbox, Flex, Paper, TextInput, Title } from '@mantine/core'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

type FormInput = {
  email: string
  password: string
  rememberMe: boolean
}

type LoginPropsType = {
  onSubmit: (data: FormInput) => void
}

const schema: yup.ObjectSchema<FormInput> = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    rememberMe: yup.boolean().required(),
  })
  .required()

export const Login = ({ onSubmit = () => {} }: LoginPropsType) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: yupResolver(schema),
    mode: 'onTouched',
  })

  const onSubmitHandler: SubmitHandler<FormInput> = data => {
    onSubmit(data)
  }

  return (
    <Paper maw={'350px'} withBorder p={40}>
      <Title mb={50} ta={'center'}>
        Sign In
      </Title>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Flex direction={'column'} gap={30}>
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder={'email'}
                error={errors.email && errors.email.message}
              />
            )}
            name={'email'}
            control={control}
          />
          <Controller
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder={'password'}
                error={errors.password && errors.password.message}
              />
            )}
            name={'password'}
            control={control}
          />
          <Checkbox {...register('rememberMe')} label={'Remember me'} sx={{ userSelect: 'none' }} />
          <Button fullWidth type={'submit'} uppercase>
            login
          </Button>
        </Flex>
      </form>
    </Paper>
  )
}
