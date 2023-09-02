import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

import { EventSlices } from './event-slice-types'

import { createEventInfoSlice } from './create-event-info-slice'
import { createEventSessionSlice } from './create-event-session-slice'

export const useEventStore = create<EventSlices>()(
  persist(
    devtools((...a) => ({
      ...createEventInfoSlice(...a),
      ...createEventSessionSlice(...a)
    })),
    { name: 'eventStore' }
  )
)
