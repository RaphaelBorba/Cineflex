/* import { useLocation, useNavigate } from "react-router-dom"; */
import styled from "styled-components";




export default function Header() {

    /* const navigate = useNavigate() */
    /* console.log(useLocation()) */

    return (

        <Top /* onClick={()=>navigate(-1)} */>
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
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


`;