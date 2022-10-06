import { Link } from "react-router-dom";
import styled from "styled-components";



export default function Sections({ object }) {

    return (

        <SectionsDiv>
            <h2> {object.weekday + ' - ' + object.date}  </h2>
            <div>
                {object.showtimes.map((a, i) => <Link key={i} to={`/sessao/${a.id}`}><button >{a.name}</button></Link>)}
            </div>
            
        </SectionsDiv>
    );
}


const SectionsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    h2{
        font-size: 20px;
        color: #293845;
        margin-bottom: 25px;
    }
    button{
        width: 83px;
        height: 43px;
        background-color: #E8833A;
        border-radius: 3px;
        border: none;
        color: white;
        margin-inline: 8px;
        cursor: pointer;
    }

`;