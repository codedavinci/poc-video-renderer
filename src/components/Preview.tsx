import React from 'react'
import { VideoData } from '../types'

type  PreviewProps = {
    videoData: VideoData
}


export default function Preview({ videoData }: PreviewProps) {

//PIXI bindings

  return (
    <div>{JSON.stringify(videoData)}</div>
  )
}
