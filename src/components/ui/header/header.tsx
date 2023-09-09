import { Button, Container, Flex, Header, Title } from '@mantine/core'

type HeaderComponentPropsType = {
  isLoggedIn: boolean
}

export const HeaderComponent = ({ isLoggedIn }: HeaderComponentPropsType) => {
  return (
    <Header height={60} mb={120} bg={'blue'} p={20}>
      <Container h={'100%'} size={'lg'}>
        <Flex h={'100%'} align={'center'} justify={'space-between'}>
          <Title c={'white'}>Todolist</Title>
          {isLoggedIn && <Button variant={'light'}>Logout</Button>}
        </Flex>
      </Container>
    </Header>
  )
}
