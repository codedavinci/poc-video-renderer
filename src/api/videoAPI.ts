import axios, {AxiosInstance} from 'axios'
import { VideoData } from '../types'

const BASE_URL = 'http://localhost:3001'



class Video {
    instance: AxiosInstance 

    constructor() {
        this.instance  = axios.create({ 
            baseURL: BASE_URL
        })
    }

    async getSceneById(videoId: string): Promise<VideoData> {
        const { data } = await this.instance.get(`/scenes/${videoId}`)
        return data as VideoData
    }

    async getScenes(): Promise<VideoData[]> {
        const { data } = await this.instance.get('/scenes') 
        return data as VideoData[]
    }

}


export default Video