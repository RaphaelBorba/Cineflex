import styled from "styled-components";



export default function SeatsButtons({ numberSeat, isAvailable, setChosenSeats, chosenSeats, id, setChosenSeatsId, chosenSeatsId}) {

    /* FUNCTION TO ADD THE SEAT IN chosenSeats */
    
    function attChosenSeats(id,seat) {
        if (chosenSeats.includes(seat)) {
            let arrId= chosenSeatsId.filter((a) => id !== a) 
            let arr = chosenSeats.filter((a) => seat !== a)
            setChosenSeats(arr)
            setChosenSeatsId(arrId)

        } else {
            let arrId=[...chosenSeatsId]
            let arr = [...chosenSeats]
            arrId.push(id)
            arr.push(seat)
            setChosenSeats(arr)
            setChosenSeatsId(arrId)
        }

    }

    /* SEE THE STATUS OF THE SEAT AND CONFIG THE COLORS */

    let background = '#C3CFD9'
    let border = '#7B8B99'
    let pointerE = 'initial'

    if (chosenSeats.includes(Number(numberSeat))) {

        background = '#1AAE9E'
        border = '#0E7D71'

    } else if (isAvailable === false) {

        background = '#FBE192'
        border = '#F7C52B'
        pointerE = 'none'
    }

    return (

        <SeatBut
            border={border}
            background={background}
            pointerE={pointerE}
            onClick={() => attChosenSeats(Number(id),Number(numberSeat))}
        >{numberSeat}</SeatBut>
    );
}

const SeatBut = styled.button`
    pointer-events: ${props => props.pointerE};
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.background};
    border: 1px solid ${props => props.border};
    border-radius: 15px;
`;