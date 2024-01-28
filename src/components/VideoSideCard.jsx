import React from 'react';
import { useNavigate } from 'react-router';
import { format } from 'timeago.js';

export default function VideoSideCard({ video }) {
    const navigate = useNavigate();

    return (
        <div
            className='cursor-pointer flex gap-3'
            // onClick={() => navigate(`/watch/${video.id}`, { state: { video } })}>
            onClick={() => navigate(`/watch/${video.id}`)}>
            <figure className='overflow-hidden rounded-md cursor-pointer basis-40'>
                <img
                    className='rounded-md hover:scale-105 transition-all '
                    id={video.etag}
                    width={'100%'}
                    height={'100%'}
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                ></img>
            </figure>
            <div className='flex-1'>
                <p className='text-sm line-clamp-2' title={video.snippet.title}>{video.snippet.title}</p>
                <p className='text-xs text-gray-500' title={video.snippet.channelTitle}>{video.snippet.channelTitle}</p>
                <p className='text-xs text-gray-500'>{format(new Date(video.snippet.publishedAt).getTime(), 'ko')}</p>
            </div>
        </div>
    );
}

