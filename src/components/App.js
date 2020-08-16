import React, {useState} from 'react';
import {Row, Col,} from 'antd';
import 'react-h5-audio-player/lib/styles.css';
import './App.css';

import Header from "./Header/Header";
import Button from "./Button/Button";
import Question from "./Question/Question";
import Body from "./Body/Body";
import Results from "./Results/Results";

const App = () => {
    const [gameStatus, setGameStatus] = useState(true);

    return (
        <Row className='main_container'>
            <Col className='container'>
                {gameStatus
                    ? <>
                        <Header />
                        <Question />
                        <Button />
                        <Body />
                    </>
                    : <Results />
                }
            </Col>
        </Row>
    )
}

export default App;
