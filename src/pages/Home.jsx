import React from 'react';
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import { useNavigate } from 'react-router-dom';

const homeQuery = () => ({
    queryKey: ['videos'],
    queryFn: async () => {
        const res = await fetch(`data/videos_trends.json`);
        return res.json();
    },
    staleTime: 5 * 1000,
});

export const loader = (queryClient) =>
    async () => {
        const query = homeQuery();
        return (
            queryClient.getQueryData(query.queryKey)
            ?? (await queryClient.fetchQuery(query))
        )
    };

export default function Home() {
    const navigate = useNavigate();
    const { isLoading, data: videos } = useQuery(homeQuery());
    
    const handleDetail = (id) => {navigate(`/watch/${id}`)}

    if (isLoading) return <div>로딩중...</div>

    return (
        <section className='grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            {videos.items.map(video => <VideoCard key={video.etag} video={video} onClick={handleDetail} />) }
        </section>
    );
}

