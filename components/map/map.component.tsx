import React, { ReactElement, useEffect } from 'react'
import RenderCompleted from '../../hooks/isMounted'

import styles from './map.module.scss'

import mapboxgl, { LngLatBoundsLike } from 'mapbox-gl'

interface Props {
  mapApi: string
  id: string
  coordinate: [number, number]
  HTML: string
  bounds: LngLatBoundsLike
}

export default function Map ({
  mapApi,
  id,
  coordinate,
  HTML,
  bounds
}: Props
): ReactElement {
  const isMounted = RenderCompleted()
  mapboxgl.accessToken = mapApi

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: id,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: coordinate,
      zoom: 15,
      maxBounds: bounds
    }).setMinZoom(8)

    var popup = new mapboxgl.Popup({ offset: 15, closeOnClick: false })
      .setLngLat(coordinate)
      .setHTML(HTML)

    var el = document.createElement('div')
    el.id = 'marker'

    new mapboxgl.Marker(el)
      .setLngLat(coordinate)
      .setPopup(popup)
      .addTo(map)
      .togglePopup()

    setTimeout(function () {
      window.scrollTo(0, 0)
    }, 0)
  }, [isMounted, HTML])

  return (
    <>
      <style global jsx>{`
        #marker {
          background-image: url("/assets/favicon/apple-touch-icon.png");
          background-size: cover;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
        }

        .mapboxgl-popup {
          max-width: 200px;
        }

        .mapboxgl-popup-close-button {
          padding: 0 7px;
        }
        
      `}</style>
      <div
        style={{ marginTop: '4vh' }}
        id={id}
        className={styles.map}
      />
    </>
  )
}
