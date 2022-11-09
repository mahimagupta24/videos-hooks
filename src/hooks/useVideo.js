import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideo = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  const search = async (term) => {
    const resp = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(resp.data.items);
  };
  return [videos, search];
};
export default useVideo;
