export default class Youtube {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    
    async search(text) {
        return text ? this.#searchByKeyword(text) : this.#mostPopular();
    }

    async #searchByKeyword(text) {
        return await this.apiClient.search({
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
        return this.apiClient.videos({
            params: {
                part: 'snippet',
                maxResults: 25,
                chart: 'mostPopular',
                regionCode: 'KR'
            }
        })
        .then((res) => res.data.items);
    }
}