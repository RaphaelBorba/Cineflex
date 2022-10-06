import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Movie from "./Movie";


export default function MoviesPage(){

    const [movies, setMovies] = useState([])

    useEffect(()=>{
        
        const promese = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        promese.then((res)=>{
            setMovies(res.data)
            console.log(res.data)
        })
        promese.catch((err)=>{
            console.log(err.response)
        })
    },[])

    if(movies.length===0){
        return 'carregando...'
    }
        
    return(

        <Movies>
            <h1>Selecione o filme</h1>
            <div>
                {movies.map((a)=><Link key={a.id} to={`/filme/${a.id}`}><Movie  url={a.posterURL} id={a.id} /></Link>)}
            </div>
        </Movies>
    );
}

const Movies = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    h1{
        margin-block: 40px;
        font-size: 24px;
    }
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 40px;
    }
`;