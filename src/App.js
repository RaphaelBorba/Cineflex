
import { GlobalStyle } from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";





export default function App() {

    return (

        <BrowserRouter>
            <GlobalStyle />
            <Header/>
            <Routes>

            </Routes>

        </BrowserRouter>

    );
}
