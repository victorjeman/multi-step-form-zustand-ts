import { useRef } from 'react'
import { Paper, TextInput, Space } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { useEventStore } from '../store/use-event-store'
import { EventFormNavigation } from './event-form-navigation'
import { useEventIntervalSubmit } from '../hooks/use-event-interval-submit'
import { eventFormInfoSchema } from '../schema/event-form-info-schema'
import { EventInfo } from '../types/event-types'
import { useNavigate } from 'react-router-dom'

export const EventFormInfo = () => {
  const { eventInfo, updateEventInfo } = useEventStore((state) => state)

  const ref = useRef<HTMLFormElement | null>(null)
  const navigate = useNavigate()

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<EventInfo>({ resolver: zodResolver(eventFormInfoSchema), defaultValues: eventInfo })

  function dispatchFormSubimt() {
    ref?.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }))
    return errors
  }

  useEventIntervalSubmit({ submitFn: dispatchFormSubimt })

  return (
    <Paper shadow="md" p="md" mx="auto" my="lg" withBorder>
      <form
        onSubmit={handleSubmit((data) => {
          updateEventInfo(data)
          navigate('/create/session')
        })}
        ref={ref}>
        <TextInput label="Name" {...register(`name`)} error={errors.name?.message} />

        <Space h="md" />

        <TextInput label="Description" {...register(`description`)} />

        <Space h="md" />

        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DatePickerInput
              label="Date"
              ref={field.ref}
              value={field.value ? new Date(field.value) : null}
              onBlur={field.onBlur}
              onChange={(event) => field.onChange(event?.toString())}
            />
          )}
        />

        <Space h="md" />

        <EventFormNavigation onNext={dispatchFormSubimt} />
      </form>
    </Paper>
  )
}
