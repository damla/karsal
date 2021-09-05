
import { useEmblaCarousel } from 'embla-carousel/react'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { useRecursiveTimeout } from '../../hooks/useRecursiveTimeout'

import styles from './emblaCarousel.module.scss'

interface Props {
  slides: any[] // degisecek
}

const AUTOPLAY_INTERVAL: number = 4000

export default function EmblaCarousel (
  { slides }: Props
): ReactElement {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const autoplay = useCallback(() => {
    if (!embla) return
    if (embla.canScrollNext()) {
      embla.scrollNext()
    } else {
      embla.scrollTo(0)
    }
  }, [embla])

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL)

  const scrollNext = useCallback(() => {
    if (!embla) return
    embla.scrollNext()
    stop()
  }, [embla, stop])

  const scrollPrev = useCallback(() => {
    if (!embla) return
    embla.scrollPrev()
    stop()
  }, [embla, stop])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
    embla.on('pointerDown', stop)
  }, [embla, onSelect, stop])

  useEffect(() => {
    play()
  }, [play])

  return (
    <div className={styles.embla}>
      <div className="embla__viewport" ref={viewportRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide}
              key={index}>{slide}</div>
          ))}
        </div>
      </div>
      <button className={styles.prevButton} onClick={scrollPrev} disabled={!prevBtnEnabled}>
        <svg className={styles.svg} viewBox="0 0 50 50"><path d="M 34.980469 3.992188 C 34.71875 3.996094 34.472656 4.105469 34.292969 4.292969 L 14.292969 24.292969 C 13.902344 24.683594 13.902344 25.316406 14.292969 25.707031 L 34.292969 45.707031 C 34.542969 45.96875 34.917969 46.074219 35.265625 45.980469 C 35.617188 45.890625 35.890625 45.617188 35.980469 45.265625 C 36.074219 44.917969 35.96875 44.542969 35.707031 44.292969 L 16.414063 25 L 35.707031 5.707031 C 36.003906 5.417969 36.089844 4.980469 35.929688 4.601563 C 35.769531 4.21875 35.394531 3.976563 34.980469 3.992188 Z"></path></svg>
      </button>
      <button className={styles.nextButton} onClick={scrollNext} disabled={!nextBtnEnabled}>
        <svg className={styles.svg} viewBox="0 0 50 50"><path d="M 34.980469 3.992188 C 34.71875 3.996094 34.472656 4.105469 34.292969 4.292969 L 14.292969 24.292969 C 13.902344 24.683594 13.902344 25.316406 14.292969 25.707031 L 34.292969 45.707031 C 34.542969 45.96875 34.917969 46.074219 35.265625 45.980469 C 35.617188 45.890625 35.890625 45.617188 35.980469 45.265625 C 36.074219 44.917969 35.96875 44.542969 35.707031 44.292969 L 16.414063 25 L 35.707031 5.707031 C 36.003906 5.417969 36.089844 4.980469 35.929688 4.601563 C 35.769531 4.21875 35.394531 3.976563 34.980469 3.992188 Z"></path></svg>
      </button>
    </div>
  )
}
