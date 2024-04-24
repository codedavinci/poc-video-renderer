import { useState, useEffect } from 'react'
import './App.css'

import LuminaryUtils from './clients/luminaryUtils'


const fetchedVideoData = {
  type: 'TextAsset',
  id: '1213-1213d-1313-d1314',
  children: []
}


const updateVideoData = {
  type: 'TextAsset',
  id: '1213-1213d-1313-d1314',
  children: [],
  extras: {}
}


const _instance = new LuminaryUtils()

type LuminaryReadableState = typeof _instance.getState

function App() {
  const [videoData, setVideoData] = useState<LuminaryReadableState>()


  useEffect(() => {
    console.log('DID I RUN ?')
    _instance.load(fetchedVideoData)
    setVideoData(_instance.getState)
  }, [])

  function updateUtils () {
    const updated = _instance.update(updateVideoData)
    setVideoData(updated)
  }


  return (
    <>
      <button onClick={updateUtils}>Update Luminary Utils State</button>
      <>{JSON.stringify(videoData)}</>
    </>
  )
}

export default App
