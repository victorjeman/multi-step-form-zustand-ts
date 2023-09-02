import { JsonView, allExpanded, defaultStyles } from 'react-json-view-lite'
import 'react-json-view-lite/dist/index.css'

import { useEventStore } from '../store/use-event-store'

export const EventPreview = () => {
  const { eventInfo, eventSessions } = useEventStore()

  return <JsonView data={{ eventInfo, eventSessions }} shouldInitiallyExpand={allExpanded} style={defaultStyles} />
}
