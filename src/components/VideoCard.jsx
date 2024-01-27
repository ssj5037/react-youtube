import React from 'react';
import { format } from 'timeago.js';

export default function VideoCard({ video, onClick }) {

    return (
        <div className='cursor-pointer' onClick={()=>onClick(video.id)}>
            <figure className='overflow-hidden rounded-xl cursor-pointer'>
                <img
                    className='rounded-xl hover:scale-105 transition-all '
                    id={video.etag}
                    width={'100%'}
                    height={'100%'}
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                ></img>
            </figure>
            <p className='text-lg line-clamp-2'>{video.snippet.title}</p>
            <p className='text-sm text-gray-500'>{video.snippet.channelTitle}</p>
            <p className='text-sm text-gray-500'>{format(new Date(video.snippet.publishedAt).getTime(), 'ko')}</p>
        </div>
    );
}

