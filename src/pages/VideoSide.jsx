import React from 'react';
import { useQuery } from '@tanstack/react-query'
import VideoSideCard from '../components/VideoSideCard';
import { useNavigate } from 'react-router-dom';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function VideoSide() {
    const navigate = useNavigate();
    const youtube = useYoutubeApi();
    const { isLoading, data: videos } = useQuery({
        queryKey: ['videos', ''],
        queryFn: () => youtube.videos(),
        staleTime: 5 * 60 * 1000,
    });
    
    const handleDetail = (id) => {navigate(`/watch/${id}`)}

    if (isLoading) return <div>로딩중...</div>

    return (
        <section className='flex flex-col gap-3'>
            {videos.items.map(video => <VideoSideCard key={video.etag} video={video} onClick={handleDetail} />) }
        </section>
    );
}

