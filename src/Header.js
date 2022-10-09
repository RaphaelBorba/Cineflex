import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";




export default function Header() {

    const navigate = useNavigate()
    

    return (

        <Top>
            {(useLocation().pathname=== '/')?null:<ion-icon onClick={()=>navigate(-1)} name="arrow-back-outline"></ion-icon>}
            <h1>CINEFLEX</h1>
        </Top>
    );
}


const Top = styled.div`

    background-color: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 67px;
    
    h1{
        color: #E8833A;
        font-size: 34px;
    }
    ion-icon{
        color: #E8833A;
        position: absolute;
        font-size: 30px;
        top: 19px;
        left: 30px;
    }


`;