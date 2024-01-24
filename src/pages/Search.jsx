import React from 'react';
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';

export default function Home() {
    const { search } = useParams();
    const { isLoading, error, data: videos } = useQuery({
        queryKey: ['videos', search],
        queryFn: async () => {
            const res = await fetch(`data/videos${search ? '_keyword' : '_trends'}.json`);
            return res.json();
        },
        staleTime: 5 * 1000,
    })
    
    if (isLoading) return <div>로딩중...</div>
    if (error) return <div>{error}</div>

    return (
        <div className='grid grid-cols-4 gap-4'>
            {videos.items.map(video => <VideoCard key={video.etag} video={video} />) }
        </div>
    );
}

