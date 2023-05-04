import React from 'react'
import { YMaps, Map,SearchControl,GeolocationControl,TypeSelector,ZoomControl,TrafficControl,FullscreenControl,Placemark } from '@pbe/react-yandex-maps';

export default function YandexMap(props) {
  return (
    <div className='container-YMaps'>
      <YMaps>
        <Map
        width='100'
        height='350px'
        defaultState={{
        center: [55.751574, 37.573856],
        zoom: 9,
        controls: [],
    }}
    >
    <SearchControl options={{ float: "right" }} />
    <GeolocationControl options={{ float: "left" }} />
    <TypeSelector options={{ float: "right" }} />
    <ZoomControl options={{ float: "right" }} />
    <TrafficControl options={{ float: "right" }} />
    <FullscreenControl />
    
    {props.objects.map(el=>
    <Placemark geometry={[el.lat,el.lon]} />
    )}
    </Map>
    </YMaps>;
    </div>
  )
}
