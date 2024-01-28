import axios from "axios";

const search = async (text) => {
    return await axios.get(`/data/videos_keyword.json`)
    .then((res) => res.data.items)
    .then((items) => items.map(item => ({ ...item, 'id': item.id.videoId })));
};

const trend = async () => {
    return await axios.get(`/data/videos_trends.json`)
    .then((res) => res.data.items)
};

export default function useYoutubeFake(text) {
    return text ? search(text) : trend();
}