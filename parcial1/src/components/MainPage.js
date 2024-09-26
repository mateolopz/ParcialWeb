import React, { useEffect, useState }from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import Card from "react-bootstrap/Card";

const MainPage = () =>{
    const [userInfo, setUserInfo] = useState("")
    const [trainingsInfo, setTrainingsInfo] = useState("")
    const URL_userInfo = "https://my.api.mockaroo.com/parcial_schema.json?key=3205f040"
    const URL_trainings = "https://my.api.mockaroo.com/parcial_training_details.json?key=3205f040"
    
    useEffect(()=>{
        fetch(URL_userInfo).then(data => data.json()).then(data => {
            setUserInfo(data)})
    }, []);

    useEffect(()=>{
        fetch(URL_trainings).then(data => data.json()).then(data => {
            setTrainingsInfo(data)})
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1>Cycling</h1>
                    <Row>

                    </Row>
                </Col>
                <Col>
                    <h1>Running</h1>
                </Col>
                <Col>
                    <h1>Swimming</h1>
                </Col>
            </Row>
            <Row className="user-info">
                <Col>
                    <img src={userInfo.profile_picture} className='image-style'></img>
                </Col>
                <Col>
                    <text>{userInfo.full_name}</text>
                </Col>
                <Col>
                    <text>PB Running: {userInfo.pb_run}</text>
                </Col>
                <Col>
                    <text>PB Swimming: {userInfo.pb_swim}</text>
                </Col>
                <Col>
                    <text>PB Biking: {userInfo.pb_biking}</text>
                </Col>                                
            </Row>
        </Container>
    );
}

export default MainPage;