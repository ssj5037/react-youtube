export default class Youtube {
    constructor(apiClient) {
        this.apiClient = apiClient;
    }
    
    async search(text) {
        return text ? this.#searchByKeyword(text) : this.#mostPopular();
    }

    async channel(id) {
        return this.#getChannel(id);
    }

    async #searchByKeyword(text) {
        return await this.apiClient.search({
            params: {
                part: 'snippet,statistics',
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
                part: 'snippet,statistics',
                maxResults: 25,
                chart: 'mostPopular',
                regionCode: 'KR'
            }
        })
        .then((res) => res.data.items);
    }

    async #getChannel(id) {
        return await this.apiClient.channel({
            params: {
                part: 'snippet,statistics',
                id
            }
        })
        .then(res => res.data.items[0]);
    }

}