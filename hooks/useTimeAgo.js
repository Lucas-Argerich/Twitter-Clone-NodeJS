import { useEffect, useState } from 'react'

const DATE_UNITS = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
]

const getDateDiffs = (timestamp) => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.ceil(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

export default function useTimeAgo(timestamp) {
  const [timeAgo, setTimeAgo] = useState(() => getDateDiffs(timestamp))
  const { value, unit } = timeAgo
  const rtf = new Intl.RelativeTimeFormat(navigator.language, {
    style: 'short',
  })

  useEffect(() => {
    const interval =
      (unit === 'minute' || unit === 'second') &&
      setInterval(
        () => {
          setTimeAgo(getDateDiffs(timestamp))
          console.log('interval set', value, unit)
        },
        unit === 'second' ? 1000 : 60000
      )
    return () => interval && clearInterval(interval)
  }, [unit])

  return rtf.format(value, unit)
}
