import { VideoData } from "../types"



class LuminaryUtils {
    private state: VideoData | null

    constructor() {
        this.state = null
    }

    load(rawVideoData: VideoData) {
        this.state = rawVideoData

        return this.getState
    }
  
    update(update: VideoData) {
      this.state = update 
  
      return this.getState;
    }
  
    get getState() {
      return Object.freeze(this.state)
    }
  }

  export default LuminaryUtils