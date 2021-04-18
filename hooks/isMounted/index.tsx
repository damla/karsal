import { useEffect, useState } from 'react'

export default function RenderCompleted (
): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => {
      setMounted(false)
    }
  })
  return mounted
}
