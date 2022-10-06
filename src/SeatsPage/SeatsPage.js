import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SeatsButtons from "./SeatsButtons";



export default function SeatsPage() {

    const [seatsArr, setSeatsArr] = useState([])

    const { idShowSeats } = useParams()

    useEffect(() => {

        const promese = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idShowSeats}/seats`)
        console.log('asdasd')
        promese.then((res) => {
            console.log(res)
            setSeatsArr(res.data)
        })

        promese.catch((err) => {
            console.log(err.response)
        })
    }, [idShowSeats])

    if (seatsArr.length === 0) {
        return 'carregando...'
    }

    return (

        <SeatsPageDiv>
            <h1>Selecione o(s) assento(s)</h1>
            <Board>
                {seatsArr.seats.map((a) => <SeatsButtons key={a.id} numberSeat={a.name} isAvailable={a.isAvailable} />)}
            </Board>
            <Infos>
                <Exemple border='#0E7D71' color='#1AAE9E'><nav></nav><span>Selecionado</span></Exemple>
                <Exemple border='#7B8B99' color='#C3CFD9'><nav></nav><span>Disponível</span></Exemple>
                <Exemple border='#F7C52B' color='#FBE192'><nav></nav><span>Indisponível</span></Exemple>
            </Infos>

        </SeatsPageDiv>
    );
}


const SeatsPageDiv = styled.div`

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

const Board = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    width: 350px;
`;

const Infos = styled.div`
    margin-block: 20px;
    display: flex;
    gap: 50px;
`;

const Exemple = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    nav{
        width: 25px;
        height: 25px;
        background-color: ${props => props.color};
        border: 1px solid ${props => props.border};
        border-radius: 15px;
        margin-bottom: 10px;
    }
`;
