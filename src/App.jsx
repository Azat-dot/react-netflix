import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useTheme } from "./hooks/useTheme";
import { MovieCard } from "./MovieCard";
import { MOVIES } from "./movies.data";

function App() {
  const {theme, toggleTheme} = useTheme()

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 800);

  const movies = MOVIES.filter(movie => 
    movie.name.toLowerCase().includes(debouncedSearch.toLowerCase()))

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black 
    text-black dark:text-white px-6 py-5">
            <header className="mb-10 flex items-center justify-between" >
                <img
                    src='/public/netflix.png'
                    alt="Netflix"
                    width="200px"
                />

                <div>
                  <input 
                    type="search" 
                    value={searchTerm} 
                    onChange={e => {setSearchTerm(e.target.value)
                  }} 
                  placeholder="Search..."
                  className="border border-white/15 px-2 py-1 rounded"
                  />

                  <button
                    onClick={toggleTheme}
                    className="text-sp px-3 py-1 rounded border border-white/20
                    dark:border-white/10 hover:bg-white hover:text-black
                    dark:hover:bg-white/10 transition w-20"
                  >
                    {theme === "dark" ? '🌞 light' : "🌙 dark"}
                  </button>
                </div>
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
