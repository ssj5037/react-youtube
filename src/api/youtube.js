import axios from "axios";

export default class Youtube {
    constructor() {
        this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: { key: process.env.REACT_APP_YOUTUBE_API_KEY}
        })
    }
    
    async search(text) {
        return text ? this.#searchByKeyword(text) : this.#mostPopular();
    }

    async #searchByKeyword(text) {
        return await this.httpClient.get(`search`, {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: text
        }})
            .then((res) => res.data.items)
            .then((items) => items.map(item => ({ ...item, 'id': item.id.videoId })));
    }

    async #mostPopular() {
        return await this.httpClient.get(`videos`, {
            params: {
                part: 'snippet',
                maxResults: 25,
                chart: 'mostPopular',
                regionCode: 'KR'
        }})
            .then((res) => res.data.items);
    }
}