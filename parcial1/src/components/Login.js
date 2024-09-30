import React, { useEffect, useState }from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import {FormattedMessage} from 'react-intl';

const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
      }

    const send_alert = () => {
        if (password.length != 8){
            alert("La contraseña debe tener 8 caracteres")
        } else if (validateEmail(email) == false){
            alert("Correo invalido")
        }
    }

    return(
        <Container fluid className="login">
            <Col className="login" style={{marginTop:"15%"}}>
                <text style={{alignContent:"left"}}><strong><FormattedMessage id="Log in"/></strong></text>
                <text><FormattedMessage id="Email"/></text>
                <input onChange= {(event)=> setEmail(event.target.value)}></input>
                <text><FormattedMessage id="Password"/></text>
                <input onChange= {(event)=> setPassword(event.target.value)}></input>
                <input type="submit" value="Log in" onClick={()=>send_alert()}></input>
            </Col>
        </Container>
    )
}

export default Login;