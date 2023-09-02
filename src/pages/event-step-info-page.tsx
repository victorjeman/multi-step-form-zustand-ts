import { Container, Title } from '@mantine/core'

import { EventFormInfo } from '../components/event-form-info'

export const EventStepInfoPage = () => {
  return (
    <Container>
      <Title order={2} ta="center" mt="xl">
        Event general info
      </Title>

      <EventFormInfo />
    </Container>
  )
}
