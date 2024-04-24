
import { ReadonlyVideoData } from '../types'

type  PreviewProps = {
    videoData: ReadonlyVideoData | null
}


export default function Preview({ videoData }: PreviewProps) {

    if(!videoData) {
     return <h1>Nothing to render !</h1>
    }

//PIXI bindings

  return (
    <div>{JSON.stringify(videoData)}</div>
  )
}
