import React from 'react';
import { useQuery } from '@tanstack/react-query'
import VideoSideCard from '../components/VideoSideCard';
import { useNavigate } from 'react-router-dom';
import { homeQuery } from './Home';

export const loader = (queryClient) =>
    async () => {
        const query = homeQuery();
        return (
            queryClient.getQueryData(query.queryKey)
            ?? (await queryClient.fetchQuery(query))
        )
    };

export default function VideoSide() {
    const navigate = useNavigate();
    const { isLoading, data: videos } = useQuery(homeQuery());
    
    const handleDetail = (id) => {navigate(`/watch/${id}`)}

    if (isLoading) return <div>로딩중...</div>

    return (
        <section className='flex flex-col gap-3'>
            {videos.items.map(video => <VideoSideCard key={video.etag} video={video} onClick={handleDetail} />) }
        </section>
    );
}

