import FavoriteButton  from "./FavoriteButton";
import { Modal } from "../../components/ui/Modal";
import { memo, useState, useCallback } from "react";
import { Link } from "react-router-dom";

function MovieCard({ image, rating, youtubeTrailerID}) {
  const [isOpenTrailer, setIsOpenTrailer] = useState(false);

  const openTrailer = useCallback(() => {
      setIsOpenTrailer(true)
    },[]);

  return (
    <div
      className="relative w-[200px] rounded-2xl overflow-hidden 
        bg-neutral-900 shadow-lg hover:scale-105 transition-transform 
        will-change-transform duration-300"
    >
      {isOpenTrailer && (
        <Modal
            onClose={() => {
                setIsOpenTrailer(false);
          }}
            >
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${youtubeTrailerID}?amp;controls=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
            </Modal>
            )
      }
      <img
        src={image}
        alt="Movie Poster"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton />
        <button
            onClick={openTrailer}>
            🎥
        </button>
        <Link
        to={`/movie/${youtubeTrailerID}`}
        >
          🔗
        </Link>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full
            bg-gradient-to-t from-black/80 to-transparent p-2 text-sm
            text-white font-semibold"
      >
        IMDB: {rating}
      </div>
    </div>
  );
}

export default memo(MovieCard)