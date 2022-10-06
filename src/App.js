
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MoviesPage from "./MoviesPage/MoviesPage";
import MovieDatePage from "./MovieDatePage/MovieDatePage";
import SeatsPage from "./SeatsPage/SeatsPage";

export default function App() {

    return (

        <BrowserRouter>
            <GlobalStyle />
            <Header/>
            <Routes>
                <Route path='/' element={<MoviesPage/>}/>
                <Route path='/filme/:idMovie' element={<MovieDatePage/>}/>
                <Route path='/sessao/:idShowSeats' element={<SeatsPage/>} />
            </Routes>

        </BrowserRouter>

    );
}
