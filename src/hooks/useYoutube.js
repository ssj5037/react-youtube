import axios from "axios";

const httpClient = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
});

const search = async (text) => {
    return await httpClient.get('search', {
        params: {
            part: 'snippet',
            maxResults: 25,
            type: 'video',
            q: text
        }
    })
    .then((res) => res.data.items)
    .then((items) => items.map(item => ({ ...item, 'id': item.id.videoId })));
};

const trend = async () => {
    return await httpClient.get('videos', {
        params: {
            part: 'snippet',
            maxResults: 25,
            chart: 'mostPopular',
            regionCode: 'KR'
        }
    })
    .then((res) => res.data.items)
};

export default function useYoutube(text) {
    return text ? search(text) : trend();
}