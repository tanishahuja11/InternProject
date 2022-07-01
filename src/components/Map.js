import React, { useEffect } from 'react'

function Map ({ lat, lng }) {
  useEffect(() => {
    const ifameData = document.getElementById('iframeId')
    const lati = lat
    const lon = lng
    ifameData.src = `https://maps.google.com/maps?q=${lati},${lon}&hl=es;&output=embed`
  })
  return (
    <div>
      <iframe id='iframeId' height='500px' width='100%'></iframe>
    </div>
  )
}

export default Map
