import { useEffect, useRef } from 'react'
import { Paper, TextInput, Button, Space, Title, Group } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { useFieldArray, useForm } from 'react-hook-form'

import { EventFormSessionPartners } from './event-form-session-partners'
import { useEventStore } from '../store/use-event-store'

const EMPTY_SESSION = { name: '', date: '', partners: [], links: [] }

export const EventFormSession = () => {
  const { eventSessions, updateEventSessions } = useEventStore((state) => state)

  const {
    control,
    register,
    handleSubmit,

    formState: { errors }
  } = useForm({
    defaultValues: {
      eventSessions
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'eventSessions'
  })

  const formRef = useRef<HTMLFormElement | null>(null)
  const navigate = useNavigate()

  function triggerSubimt() {
    formRef?.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
  }

  const interval = useInterval(() => triggerSubimt(), 8000)

  function goNextPage() {
    triggerSubimt()
    navigate('/create/preview')
  }

  useEffect(() => {
    interval.start()
    return interval.stop
  }, [])

  console.log('EventFormSession rendering ')

  return (
    <Paper shadow="md" p="md" mx="auto" my="lg" withBorder>
      <Title order={2}>Event session info</Title>

      <form onSubmit={handleSubmit((data) => updateEventSessions(data.eventSessions))} ref={formRef}>
        {fields.map((item, index) => {
          return (
            <Paper key={item.id} shadow="md" p="md" mx="auto" my="lg" withBorder>
              <Group position="apart">
                <Title order={3}>Session {index + 1}</Title>

                <Button variant="outline" color="red" size="xs" onClick={() => remove(index)}>
                  Delete session
                </Button>
              </Group>

              <Space h="md" />

              <TextInput label="Name" {...register(`eventSessions.${index}.name`)} />

              <Space h="md" />

              <TextInput label="Name" {...register(`eventSessions.${index}.date`)} />

              <Space h="md" />

              <EventFormSessionPartners nestIndex={index} control={control} register={register} />
            </Paper>
          )
        })}

        <Space h="md" />
      </form>

      <Button variant="outline" size="xs" onClick={() => append(EMPTY_SESSION)}>
        Add session
      </Button>

      <Space h="md" />

      <Group position="apart">
        <Button variant="light" onClick={() => navigate('/create/info')}>
          Go back
        </Button>

        <Button onClick={goNextPage}>Go next</Button>
      </Group>
    </Paper>
  )
}
