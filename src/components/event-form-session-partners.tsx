import { useFieldArray } from 'react-hook-form'
import { Paper, TextInput, Button, Space, Title, Group } from '@mantine/core'
import type { Control, UseFormRegister } from 'react-hook-form'

import type { EventSession } from '../types/event-types'

type Props = {
  nestIndex: number
  control: Control<{ eventSessions: EventSession[] }>
  register: UseFormRegister<{ eventSessions: EventSession[] }>
}

const EMPTY_PARTNER = {
  name: '',
  email: ''
}

export const EventFormSessionPartners = ({ control, nestIndex, register }: Props) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `eventSessions.${nestIndex}.partners`
  })

  console.log('EventFormSessionPartners rendering ')

  return (
    <>
      {fields.map((item, index) => {
        return (
          <Paper key={item.id} shadow="md" p="md" mx="auto" my="lg" withBorder>
            <Group position="apart">
              <Title order={4}>Partner {index + 1}</Title>

              <Button variant="outline" color="red" size="xs" onClick={() => remove(index)}>
                Delete partner
              </Button>
            </Group>

            <TextInput label="Partner name" {...register(`eventSessions.${nestIndex}.partners.${index}.name`)} />

            <Space h="md" />

            <TextInput label="Partner email" {...register(`eventSessions.${nestIndex}.partners.${index}.email`)} />

            <Space h="md" />
          </Paper>
        )
      })}

      <Space h="md" />

      <Button variant="outline" size="xs" onClick={() => append(EMPTY_PARTNER)}>
        Add partner
      </Button>
    </>
  )
}
