import { Button, Group, Paper, Title, Space } from '@mantine/core'
import { useNavigate } from 'react-router-dom'

import { EventPreview } from './event-preview'

export const EventFormPreview = () => {
  const navigate = useNavigate()

  return (
    <Paper shadow="md" p="md" mx="auto" my="lg" withBorder>
      <Title order={2}>Event preview page</Title>

      <Space h="md" />

      <EventPreview />

      <Space h="md" />

      <Group position="apart">
        <Button variant="light" onClick={() => navigate('/create/session')}>
          Go back
        </Button>

        <Button onClick={() => {}}>Save event</Button>
      </Group>
      <Space h="md" />
    </Paper>
  )
}
