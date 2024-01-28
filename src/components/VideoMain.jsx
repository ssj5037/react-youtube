import React from 'react';
import { format } from 'timeago.js';

const numberFormatter = new Intl.NumberFormat('ko', {notation: 'compact'});
    
export default function VideoMain({ video }) {

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
            {/* {
                channels.items.map(channel => (
                    <div key={channel.id}>
                        <img
                            src={channel.snippet.thumbnails.default.url}
                            width={channel.snippet.thumbnails.default.width}
                            height={channel.snippet.thumbnails.default.height}
                            alt={channel.snippet.description}
                        />
                        <p className='text-md font-bold'>{video.snippet.channelTitle}</p>
                    </div>
                ))
            } */}
            <p className='text-md font-bold'>{video.snippet.channelTitle}</p>
            <div className='p-5 rounded-md bg-gray-100'>
                <span>조회수 {numberFormatter.format(video.statistics.viewCount)}회 </span>
                <span>{format('2024-01-27 10:00:00', 'ko')}</span>
                <p>{video.snippet.tags.map(tag => <span className='text-blue-500 mr-1' key={tag}>#{tag}</span>)}</p>
                <p>{video.snippet.description}</p>
            </div>
        </article>
    )
}

