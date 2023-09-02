import { Route, Routes } from 'react-router-dom'

import { EventHomePage } from './pages/event-home-page'
import { EventStepInfoPage } from './pages/event-step-info-page'
import { EventStepSessionPage } from './pages/event-step-session-page'
import { EventStepPreviewPage } from './pages/event-step-preview-page'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<EventHomePage />} />
      <Route path="create/info" element={<EventStepInfoPage />} />
      <Route path="create/session" element={<EventStepSessionPage />} />
      <Route path="create/preview" element={<EventStepPreviewPage />} />
    </Routes>
  )
}
