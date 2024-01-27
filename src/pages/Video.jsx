import { useQuery } from '@tanstack/react-query'
import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'timeago.js';

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

    const numberFormatter = new Intl.NumberFormat('ko', {notation: 'compact'});
    
    if (isLoading) return <div>로딩중...</div>

    return (
        <section className='px-5'>
            {data.items.map(video => {
                return (
                    <article key={video.id} className='flex flex-col gap-2' style={{ width: '70%' }}>
                        <figure className='relative x-full' style={{paddingBottom: '56.25%'}}>
                            <iframe
                                 className='absolute w-full h-full rounded-2xl'
                                id={video.id} type="text/html"
                                width={'100%'}
                                height={'100%'}
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.snippet.title}
                            ></iframe>
                        </figure>
                        <h1 className='text-2xl font-bold'>{video.snippet.title}</h1>
                        <p className='text-md font-bold'>{video.snippet.channelTitle}</p>
                        <div className='p-5 rounded-md bg-gray-100'>
                            <span>조회수 {numberFormatter.format(video.statistics.viewCount)}회 </span>
                            <span>{format('2024-01-27 10:00:00', 'ko')}</span>
                            <p>{video.snippet.tags.map(tag => <span className='text-blue-500 mr-1' key={tag}>#{tag}</span>)}</p>
                            <p>{video.snippet.description}</p>
                        </div>
                    </article>
                )
            })}
        </section>
    );
}

