import { useQuery } from '@tanstack/react-query'
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import VideoMain from '../components/VideoMain';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import VideoSideCard from '../components/VideoSideCard';

export default function Video() {
    const { id } = useParams();
    const { state: { video } } = useLocation();
    const { youtube } = useYoutubeApi();
    const { isLoading: channelLoading, data: channel } = useQuery({
        queryKey: ['video', video.snippet.channelId],
        queryFn: async () => youtube.channel(video.snippet.channelId),
        staleTime: 5 * 60 * 1000
    });

    const { isLoading: videosLoading, data: videos } = useQuery({
        queryKey: ['video'],
        queryFn: async () => youtube.search(),
        staleTime: 5 * 60 * 1000
    });

    if (channelLoading || videosLoading ) return <div>로딩중...</div>

    return (
        <section className='flex gap-5 lg:flex-row flex-col'>
            <div className='flex-3'>
                <VideoMain video={video} channel={channel} />
            </div>
            <ul className='flex-1 flex flex-col gap-3'>
                {videos.map(video => <VideoSideCard key={video.etag} video={video} />) }
            </ul>
        </section>
    );
}

