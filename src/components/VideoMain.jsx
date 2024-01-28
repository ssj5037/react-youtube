import React from 'react';
import { format } from 'timeago.js';

const numberFormatter = new Intl.NumberFormat('ko', {notation: 'compact'});
    
export default function VideoMain({ video, channel }) {

    return (
        <article className='flex flex-col gap-2'>
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
            <div className='flex gap-3 items-center'>
                <img
                    className='w-12 rounded-full'
                    src={channel.snippet.thumbnails.default.url}
                    alt={channel.snippet.description}
                    title={channel.snippet.title}
                />
                <div>
                    <p className='text-md font-bold'>{video.snippet.channelTitle}</p>
                    <p className='text-sm'>구독자 {numberFormatter.format(channel.statistics.subscriberCount)}명</p>
                </div>
            </div>
            <div className='p-3 rounded-md bg-gray-100'>
                <span>조회수 {numberFormatter.format(video.statistics.viewCount)}회 </span>
                <span>{format(video.snippet.publishedAt, 'ko')}</span>
                <p>{video.snippet.tags.map(tag => <span className='text-blue-500 mr-1' key={tag}>#{tag}</span>)}</p>
                <pre className='whitespace-pre-wrap'>{video.snippet.description}</pre>
            </div>
        </article>
    )
}

