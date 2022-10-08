import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";


export default function SucessPage(){

    /* RECIVE DATA BY USELOCATION() */

    const {state} = useLocation();
    const {infosMovie, resultForm, chosenSeats} = state

    return(

        <SucessPageDiv>
            <h1>Pedido feito <br/>com sucesso!</h1>
            <div>
                <h2>Filme e sessão</h2>
                <h3>{infosMovie.movie.title}</h3>
                <h3>{infosMovie.day.date} {infosMovie.name}</h3>
            </div>
            <div>
                <h2>Ingressos</h2>
                {chosenSeats.map((a,i)=><h3 key={i}>Assento {a}</h3>)}
            </div>
            <div>
                <h2>Comprador</h2>
                <h3>Nome: {resultForm.name}</h3>
                <h3>CPF: {resultForm.cpf}</h3>
            </div>

            <nav><Link to='/'><button>Voltar para Home</button></Link></nav>

        </SucessPageDiv>
    );
}

const SucessPageDiv= styled.div`

    display: flex;
    justify-content: center;
    flex-direction: column;

    h1{
        font-size: 24px;
        color: #247A6B;
        text-align: center;
        margin-block:30px;
        font-weight: 700;
    }
    div{
        margin: 10px 0 25px 25px;
    }
    h2{
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 10px;
    }
    h3{
        color:#293845;
        font-size: 22px;
        margin-bottom: 5px;
    }
    button{
        color: white;
        width: 225px;
        height: 42px;
        background: #E8833A;
        border: none;
        border-radius: 3px;
        font-size: 18px;
        cursor: pointer;
    }
    nav{
        margin: 10px auto;
    }
`;

