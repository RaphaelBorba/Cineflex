import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



export default function SeatsForm({chosenSeatsId , seatsArr, chosenSeats}) {

    const [form, setForm] = useState({ name: '', cpf: ''})
    const navigate = useNavigate()

    /* CREATE AND POST A PROMESE, AFTER SUCCESS NAVIGATE TO /sucesso */

    function reserveSeats(e){

        e.preventDefault()

        let obj = {...form, ids:chosenSeatsId}
        setForm(obj)

        let url = 'https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many'
        
        const promese = axios.post(url,obj)

        
        
        promese.then((e)=>{
            navigate('/sucesso', { state: {infosMovie:seatsArr, resultForm:obj , chosenSeats} })
        })

        promese.catch((e)=>alert(e.response.dat))
        
    }

    /* FUNCTION TO MAKE EASIER THE INPUTS CONTROL */

    function handleForm(e){
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    return (

        <>
            <Form onSubmit={reserveSeats}>
                <label htmlFor="name">Nome do comprador:</label>
                <input
                    required
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    type='text'
                    placeholder="Digite seu nome..."
                />
                <label htmlFor="cpf">CPF do comprador:</label>
                <input
                    required
                    id="cpf"
                    name="cpf"
                    value={form.cpf}
                    onChange={handleForm}
                    type='number'
                    placeholder="Digite seu CPF..."
                />

                <button type="submit">Reservar assento(s)</button>
            </Form>
        </>
    );
}


const Form = styled.form`

    display: flex;
    flex-direction: column;
    label{
        font-size: 18px;
        margin-block: 10px;
    }
    input{
        
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        width: 327px;
        height: 51px;
        font-size: 18px;
    }
    button{
        color: white;
        width: 225px;
        height: 42px;
        background: #E8833A;
        margin: 30px auto 20px auto;
        border: none;
        border-radius: 3px;
        font-size: 18px;
    }
`;