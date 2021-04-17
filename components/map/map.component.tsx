import React, { ReactElement, useEffect, useState } from 'react'

import styles from './map.module.scss'

import mapboxgl from 'mapbox-gl'

interface Props {
  mapApi: string
  id: string
  coordinate: [number, number]
  HTML: string
}

export default function Map ({
  mapApi,
  id,
  coordinate,
  HTML
}: Props
): ReactElement {
  const [pageIsMounted, setPageIsMounted] = useState(false)

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
      style={{ marginTop: '4vh' }}
      id={id}
      className={styles.map}
    />
  )
}
