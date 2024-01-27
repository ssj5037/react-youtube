import React from 'react';
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import { useNavigate, useParams } from 'react-router-dom';

const searchQuery = (text) => ({
    queryKey: ['videos', text],
    queryFn: async () => {
        const res = await fetch(`data/videos_keyword.json`);
        return res.json();
    },
    staleTime: 5 * 1000,
});

export const loader = (queryClient) =>
    async ({ params }) => {
        const query = searchQuery(params.text);
        return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        )
    };

export default function Search() {
    const navigate = useNavigate();
    const { text } = useParams();
    const { isLoading, data: videos } = useQuery(searchQuery(text));
    
    const handleDetail = (id) => {navigate(`/watch/${id}`)}

    if (isLoading) return <div>로딩중...</div>

    return (
        <section className='grid grid-cols-4 gap-4'>
            {videos.items.map(video => <VideoCard key={video.etag} video={video} onClick={handleDetail} />) }
        </section>
    );
}

