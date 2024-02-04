import React from "react";
import { useNavigate } from "react-router";
import { format } from "timeago.js";

export default function VideoCard({ video }) {
  const navigate = useNavigate();

  return (
    <li
      className="cursor-pointer"
      //   onClick={() => navigate(`/watch/${video.id}`, { state: { video } })}
      onClick={() => navigate(`/watch/${video.id}`)}
    >
      <figure className="overflow-hidden rounded-xl">
        <img
          className="rounded-xl hover:scale-105 transition-all "
          id={video.id}
          width={"100%"}
          height={"100%"}
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        ></img>
      </figure>
      <p className="text-lg line-clamp-2">{video.snippet.title}</p>
      <p className="text-sm text-gray-500">{video.snippet.channelTitle}</p>
      <p className="text-sm text-gray-500">
        {format(new Date(video.snippet.publishedAt).getTime(), "ko")}
      </p>
    </li>
  );
}
