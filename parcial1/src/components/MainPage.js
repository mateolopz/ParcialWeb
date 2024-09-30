import React, { useEffect, useState }from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import Card from "react-bootstrap/Card";
import {FormattedMessage} from 'react-intl';

const MainPage = () =>{
    const [userInfo, setUserInfo] = useState("")
    const [trainingsInfo, setTrainingsInfo] = useState([])
    const URL_userInfo = "https://my.api.mockaroo.com/parcial_schema.json?key=3205f040"
    const URL_trainings = "https://my.api.mockaroo.com/parcial_training_details.json?key=3205f040"
    
    useEffect(()=>{
        fetch(URL_userInfo).then(data => data.json()).then(data => {
            setUserInfo(data)})
    }, []);

    useEffect(()=>{
        fetch(URL_trainings).then(data => data.json()).then(data => {
            console.log(data)
            setTrainingsInfo(data)})
            
    }, []);

    return (
        <Container fluid>
            <Row>
                <Col>
                    <h1><FormattedMessage id="Cycling"/></h1>
                    <Card>
                        {trainingsInfo.map(data=><Card.Body>{data.city}</Card.Body>)}
                    </Card>
                </Col>
                <Col>
                    <h1><FormattedMessage id="Running"/></h1>
                </Col>
                <Col>
                    <h1><FormattedMessage id="Swimming"/></h1>
                </Col>
                <select>
                    <option value="fruit">Fruit</option>
                    <option value="vegetable">Vegetable</option>
                    <option value="meat">Meat</option>
                </select>
            </Row>
            <Row className="user-info">
                <Col>
                    <img src={userInfo.profile_picture} className='image-style'></img>
                </Col>
                <Col>
                    <text>{userInfo.full_name}</text>
                </Col>
                <Col>
                    <text>PB <FormattedMessage id="Running"/>: {userInfo.pb_run}</text>
                </Col>
                <Col>
                    <text>PB <FormattedMessage id="Swimming"/>: {userInfo.pb_swim}</text>
                </Col>
                <Col>
                    <text>PB <FormattedMessage id="Cycling"/>: {userInfo.pb_biking}</text>
                </Col>                                
            </Row>
        </Container>
    );
}

export default MainPage;