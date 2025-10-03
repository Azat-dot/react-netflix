import { useParams } from 'react-router-dom'
import { MOVIES } from './movies.data'
import { useMemo } from 'react'

export function MovieDetails() {
    const { id } = useParams()

    const movie = useMemo(() => {
        return MOVIES.find(movie => movie.youtubeTrailerID === id)
    }, [id])

    if (!movie) return <p>Movie not found!</p>

  return (
    <div className='min-h-screen px-6 py-18 bg-black text-white'>
       <div className='flex flex-col md:flex-row gap-10 items-start'>
       <img
            src={movie.image}
            alt={movie.image}
            className="w-2/3 m/d:w-1/3 rounded-xl shadow-lg object-cover"
        />
      
            <div className='flex-1 space-y-4'>
                <h1 className='text-4xl font-bold'>{ movie.name }</h1>
                <p className='text-sm text-gray-400'> IMDB: {movie.rating}</p>
                <p className='text-gray-300 text-sm'>
                    Это краткое описание фильма. Как в интерфейсе
                    Netflix
                </p>
            </div>
       </div>
    </div>
  )
}

