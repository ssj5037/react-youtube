import axios from "axios";

export default class FakeYoutube {
    constructor() {

    }
    
    async search(text) {
        return text ? this.#searchByKeyword() : this.#mostPopular();
    }

    async #searchByKeyword() {
        return await axios.get(`/data/videos_keyword.json`)
            .then((res) => res.data.items)
            .then((items) => items.map(item => ({ ...item, 'id': item.id.videoId })));
    }

    async #mostPopular() {
        return await axios.get(`/data/videos_trends.json`)
            .then((res) => res.data.items);
    }
}