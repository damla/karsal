import { useState, useRef, useEffect, useCallback } from 'react'

export const useRecursiveTimeout = (callback: any, delay: any): any => {
  const [isRunning, setIsRunning] = useState(false)
  const stop = useCallback(() => setIsRunning(false), [setIsRunning])
  const play = useCallback(() => setIsRunning(true), [setIsRunning])
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (!isRunning) return
    let id = 0

    const tick = (): void => {
      if (!isRunning) return clearTimeout(id)
      savedCallback.current()
      requestAnimationFrame(() => (id = window.setTimeout(tick, delay)))
    }
    requestAnimationFrame(() => (id = window.setTimeout(tick, delay)))

    return () => {
      if (id) clearTimeout(id)
      stop()
    }
  }, [isRunning, delay, stop])

  return { play, stop }
}
