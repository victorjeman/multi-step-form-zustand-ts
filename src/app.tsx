import { Grid } from '@mantine/core'

import { AppRouter } from './app-router'
import { EventPreview } from './components/event-preview'

export default function App() {
  return (
    <div>
      <Grid>
        <Grid.Col span={6}>
          <AppRouter />
        </Grid.Col>
        <Grid.Col span={6}>
          <EventPreview />
        </Grid.Col>
      </Grid>
    </div>
  )
}
