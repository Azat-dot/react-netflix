import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from "./screens/home/App"
import { Layout } from './components/ui/Layout'
import {MovieDetails} from './screens/movie/MovieDetails'

export function MainRoutes() {
    return <Router>
        <Routes>
           <Route element= {<Layout/>} >
                 <Route path='/' element={<App />}/>
                <Route path='/movie/:id' element={<MovieDetails />}/>

           </Route>

        </Routes>
    </Router>

}

export default MainRoutes
