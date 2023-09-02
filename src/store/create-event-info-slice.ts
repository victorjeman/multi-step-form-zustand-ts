import type { StateCreator } from 'zustand'
import { EventInfo } from '../types/event-types'

import type { EventInfoSlice, EventSlices } from './event-slice-types'

export const createEventInfoSlice: StateCreator<
  EventSlices,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  EventInfoSlice
> = (set) => ({
  eventInfo: {
    name: '',
    description: '',
    date: null
  },
  updateEventInfo: (eventInfo: EventInfo) => set(() => ({ eventInfo: eventInfo }))
})
