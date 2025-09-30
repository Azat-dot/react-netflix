import { useState } from "react";
import { MovieCard } from "./MovieCard";
import { MOVIES } from "./movies.data";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const movies = MOVIES.filter(movie => movie.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
            <header className="mb-10 flex items-center justify-between" >
                <img
                    src='/public/netflix.png'
                    alt="Netflix"
                    width="200px"
                />
                <input 
                  type="search" 
                  value={searchTerm} 
                  onChange={e => {setSearchTerm(e.target.value)
                }} 
                placeholder="Search..."
                className="border border-white/15 px-2 py-1 rounded"
                />
            </header>
            <main className="flex gap-6">
              {
                movies.length ? movies.map(movie => (
                    <MovieCard 
                      key={movie.name}
                      image= {movie.image} 
                      rating= {movie.rating}
                    />
                )) :(
                  <p>Movies not found</p>
                )

                }
            
            </main>
    </div>
  
    );
}

export default App;
