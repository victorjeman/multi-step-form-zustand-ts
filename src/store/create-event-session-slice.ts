import type { StateCreator } from 'zustand'
import { EventSession } from '../types/event-types'

import type { EventSessionSlice, EventSlices } from './event-slice-types'

export const createEventSessionSlice: StateCreator<
  EventSlices,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  [],
  EventSessionSlice
> = (set) => ({
  eventSessions: [
    {
      name: '',
      date: '',
      partners: [
        {
          name: '',
          email: ''
        }
      ],
      links: [
        {
          name: '',
          url: ''
        }
      ]
    }
  ],

  updateEventSessions: (eventSessions: EventSession[]) => set(() => ({ eventSessions: eventSessions }))
})
