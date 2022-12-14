import styled from "styled-components";


export default function Movie({id, url}){

    return(

        <MovieBox>
            <img src={url} alt={url}/>
        </MovieBox>
    );
}

const MovieBox = styled.div`
    width: 145px;
    height: 209px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
        width: 129px;
        height: 193px;
    }
`;