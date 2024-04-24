import { useState, useEffect } from 'react'
import { ReadonlyVideoData } from '../types'

import Preview  from './Preview'
import VideoAPI from '../api/videoAPI'
import '../index.css'

import LuminaryUtils from '../clients/LuminaryUtils'

const INITIAL_VIDEO_ID = '1213-1213d-1313-d1314'


const luminaryUtils = new LuminaryUtils()
const videoAPI  = new VideoAPI()


function Editor() {
  
  const [videoData, setVideoData] = useState<ReadonlyVideoData | null>(null)

  useEffect(() => {

     const fetchData = async () => {
      const scene = await videoAPI.getSceneById(INITIAL_VIDEO_ID)
      luminaryUtils.load(scene)
      setVideoData(luminaryUtils.getState)
     }
    
    fetchData()
  }, [])

  async function fetchVideo() {

    const NEW_VIDEO_ID = "1213-1213d-1313-d1313"
    const scene = await videoAPI.getSceneById(NEW_VIDEO_ID)

    const updated = luminaryUtils.update(scene)
    setVideoData(updated)
  }

  

  return (
    <>
      <button onClick={fetchVideo}>Update Luminary Utils State</button>
      <Preview videoData={videoData}/ >
    </>
  )
}

export default Editor
