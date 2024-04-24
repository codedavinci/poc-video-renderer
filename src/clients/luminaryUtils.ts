import { VideoData } from "../types"






type State  = Partial<VideoData>


class LuminaryUtils {
    private state: State

    constructor() {
        this.state = {}
    }

    load(rawVideoData: object) {
        this.state = rawVideoData

        return this.getState
    }
  
    update(update: object) {
      this.state = update 
  
      return this.getState;
    }
  
    get getState() {
      return Object.freeze(this.state)
    }
  }

  export default LuminaryUtils