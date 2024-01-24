import React from 'react';
import { format } from 'timeago.js';

export default function VideoCard({ video }) {

    return (
        <div className='cursor-pointer'>
            <div className='overflow-hidden rounded-xl cursor-pointer'>
                <iframe
                    className='rounded-xl hover:scale-105 transition-all '
                    id={video.id} type="text/html"
                    width={video.snippet.thumbnails.medium.width}
                    height={video.snippet.thumbnails.medium.height}
                    src={video.snippet.thumbnails.medium.url}
                    title={video.snippet.title}
                ></iframe>
            </div>
            <p className='text-lg line-clamp-2'>{video.snippet.title}</p>
            <p className='text-sm text-gray-500'>{video.snippet.channelTitle}</p>
            <p className='text-sm text-gray-500'>{format(new Date(video.snippet.publishedAt).getTime())}</p>
        </div>
    );
}

