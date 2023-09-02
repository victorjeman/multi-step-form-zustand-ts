import { useEffect } from 'react'
import { useInterval } from '@mantine/hooks'

type Props = {
  submitFn: () => void
  delay?: number
}

export const useEventIntervalSubmit = ({ submitFn, delay = 8000 }: Props) => {
  const interval = useInterval(() => submitFn, delay)

  useEffect(() => {
    interval.start()
    return interval.stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
