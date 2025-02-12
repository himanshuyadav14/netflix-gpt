import { useSelector } from "react-redux";
import { TMDB_CDN_URL } from "../services/tmdb";
import { useEffect, useRef } from "react";

const VideoBackground = ({ videos, title, backdrop, poster }) => {
  const trailers = videos.filter((trailer) => trailer.type === "Trailer");
  const trailerKey = trailers[0]?.key;
  const isMuted = useSelector((store) => store?.app?.isMuted);

  return (
    <div className="absolute w-full h-full">
      <img
        className="h-full w-full object-cover md:hidden"
        src={`${TMDB_CDN_URL}/w500${poster}`}
        alt={title}
      />
      <img
        className={`h-full w-full object-cover hidden md:block ${
          trailerKey && "xl:hidden"
        }`}
        src={`${TMDB_CDN_URL}/w1280${backdrop}`}
        alt={title}
      />
      {trailerKey && (
        <div className="w-[300%] h-full hidden xl:block ml-[-100%]">
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=${
              isMuted ? 1 : 0
            }&loop=1&controls=0&color=white&rel=0&iv_load_policy=3&modestbranding=1&fs=0&disablekb=1&playsinline=1&playlist=${trailerKey}`}
            title="YouTube video player"
            loading="lazy"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VideoBackground;
