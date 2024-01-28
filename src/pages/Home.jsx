import React from 'react';
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import { useNavigate, useParams } from 'react-router-dom';
import FakeYoutube from '../api/youtubeFake';
import Youtube from '../api/youtube';

export const homeQuery = (text) => ({
    queryKey: ['videos', text ?? ''],
    queryFn: () => {
        const youtube = new FakeYoutube();
        return youtube.search(text);
    },
    staleTime: 5 * 60 * 1000,
});

export const loader = (queryClient) =>
    async ({params}) => {
        const query = homeQuery(params.text);
        return (
            queryClient.getQueryData(query.queryKey)
            ?? (await queryClient.fetchQuery(query))
        )
    };

export default function Home() {
    const navigate = useNavigate();
    const { text } = useParams();
    const { isLoading, data: videos } = useQuery(homeQuery(text));
    
    const handleDetail = (id) => {navigate(`/watch/${id}`)}

    if (isLoading) return <div>로딩중...</div>

    return (
        <section className='grid grid-cols-1 gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            {videos.map(video => <VideoCard key={video.etag} video={video} onClick={handleDetail} />) }
        </section>
    );
}

