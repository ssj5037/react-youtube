import { useQuery } from '@tanstack/react-query'
import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import VideoMain from '../components/VideoMain';

const videoQuery = (id) => ({
    queryKey: ['video', id],
    queryFn: async () => {
        const res = await fetch(`data/video.json`);
        return res.json();
    },
})

export const loader = (queryClient) =>
    async ({ params }) => {
            const query = videoQuery(params.id)
            return (
              queryClient.getQueryData(query.queryKey) ??
              (await queryClient.fetchQuery(query))
            )
    }
  
export default function Video() {
    const { id } = useParams();
    const { isLoading, data } = useQuery(videoQuery(id));

    if (isLoading) return <div>로딩중...</div>

    return (
        <section className='flex gap-5 lg:flex-row flex-col'>
            <div className='flex-3'>
                {data.items.map(video => <VideoMain key={video.id} video={video} />)}
            </div>
            <div className='flex-1'>
                <Outlet />
            </div>
        </section>
    );
}

