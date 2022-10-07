import styled from "styled-components";



export default function FooterSeatsPage({hour, date, url, title }) {

    return (

        <Footer>
            <article>
                <img src={url} alt={url} />
            </article>
            <h3>{title} <br/>{date} - {hour}</h3>
        </Footer>
    );
}

const Footer = styled.footer`
    background-color: #DFE6ED;
    color:  #293845;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    border: 1px solid #9EADBA;

    article{
        width: 64px;
        height: 89px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    h3{
        font-size: 23px;
        margin-left: 30px;
    }

    img{
        width: 48px;
        height: 72px;
    }
`;