import styled from "styled-components";



export default function SeatsButtons({numberSeat, isAvailable}){

    return(

        <SeatBut isAvailable={isAvailable} >{numberSeat}</SeatBut>
    );
}

const SeatBut = styled.button`

    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 15px;
`;