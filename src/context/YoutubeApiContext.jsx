import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClientFake from "../api/youtubeClientFake";

export const YoutubeApiContext = createContext();
const client = new YoutubeClientFake();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
    return <YoutubeApiContext.Provider value={{ youtube }}>
        {children}
    </YoutubeApiContext.Provider>
}

export const useYoutubeApi =() => useContext(YoutubeApiContext);