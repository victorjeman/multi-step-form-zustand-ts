export type EventPartner = {
  name: string
  email: string
}

export type EventLink = {
  name: string
  url: string
}

export type EventInfo = {
  name: string
  description: string
  date: Date | null
}

export type EventSession = {
  name: string
  date: string
  partners: EventPartner[]
  links: EventLink[]
}

export type EventBody = EventInfo & {
  sessions: EventSession[]
}
