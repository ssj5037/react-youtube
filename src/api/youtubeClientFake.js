import axios from "axios";

export default class YoutubeClientFake {
    async search() {
        return axios.get(`/data/videos_keyword.json`)
    }
    async videos() {
        return axios.get(`/data/videos_trends.json`)
    }
}