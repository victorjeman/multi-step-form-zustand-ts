import { Button, Group } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import type { FieldErrors, FieldValues } from 'react-hook-form'

type Props = {
  prev?: string
  onNext: () => FieldErrors<FieldValues>
}

export const EventFormNavigation = ({ prev, onNext }: Props) => {
  const navigate = useNavigate()

  function navigatePrev() {
    if (prev) navigate(prev)
  }

  return (
    <Group position="apart">
      {prev ? <Button onClick={navigatePrev}>Go back</Button> : <span></span>}
      <Button onClick={onNext}>Go next</Button>
    </Group>
  )
}
