import { EventInfo, EventSession } from '../types/event-types'

export type EventInfoSlice = {
  eventInfo: EventInfo
  updateEventInfo: (eventInfo: EventInfo) => void
}

export type EventSessionSlice = {
  eventSessions: EventSession[]
  updateEventSessions: (sessions: EventSession[]) => void
}

export type EventSlices = EventInfoSlice & EventSessionSlice
