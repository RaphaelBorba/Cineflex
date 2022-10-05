import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import FooterDatePage from "./FooterDatePage";
import Sections from "./Sections";



export default function MovieDatePage() {

    const [chosenMovie, setChosenMovie] = useState([])
    const {idMovie} = useParams()
    

    useEffect(()=>{
        
        const promese = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idMovie}/showtimes`)

        promese.then((res)=>{
            
            setChosenMovie(res.data)
        })
        promese.catch((err)=>{
            alert('Erro: ' +err.response.status)
        })
    },[])

    console.log(chosenMovie)

    return (

        <SectionsPage>
            <h1>Selecione o horário</h1>
            <div>
                {(chosenMovie.length!==0)?chosenMovie.days.map((a,i)=><Sections key={i} object={a} />):'Carregando...'}
            </div>
            <FooterDatePage title={chosenMovie.title} url={chosenMovie.posterURL}/>
        </SectionsPage>

    );
}

const SectionsPage = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 100px;

    h1{
        margin-block: 40px;
        font-size: 24px;
        
    }
`;