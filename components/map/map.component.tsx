import React, { CSSProperties, ReactElement, useEffect, useState } from 'react'

// import styles from './map.module.scss'

import mapboxgl from 'mapbox-gl'

interface Props {
  mapApi: string
  id: string
  width: number
  height: number
  coordinate: [number, number]
  HTML: string
}

export default function Map ({
  mapApi,
  id,
  width,
  height,
  coordinate,
  HTML
}: Props
): ReactElement {
  const [pageIsMounted, setPageIsMounted] = useState(false)

  const style: CSSProperties = {
    width,
    height
  }

  mapboxgl.accessToken = mapApi

  useEffect(() => {
    setPageIsMounted(true)

    const map = new mapboxgl.Map({
      container: id,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinate,
      zoom: 14
    })

    var marker = new mapboxgl.Marker()
      .setLngLat(coordinate)
      .addTo(map)

    var popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(coordinate)
      .setHTML(HTML)
      .addTo(map)
  }, [])

  return (
    <div
      id={id}
      style={style}
    />
  )
}
