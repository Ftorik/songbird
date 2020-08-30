import React, {useEffect, useRef, useState} from 'react';
import {Row, Col,} from 'antd';
import 'react-h5-audio-player/lib/styles.css';
import './App.css';

import Header from "./Header/Header";
import Button from "./Button/Button";
import Question from "./Question/Question";
import Body from "./Body/Body";
import Results from "./Results/Results";

import gameData from "../utils/game_data";
import {stopPlayer} from "../utils/game_helpers";

const App = () => {
    const [data, setData] = useState({
        isRunning: true,
        score: 0,
        category: 0,
        question: 0,
        attempt: 0,
        isSolve: false,
    })
    const audioPlayerQuestionRef = useRef(null);

    useEffect(() => {
        if (audioPlayerQuestionRef.current) {
            stopPlayer( audioPlayerQuestionRef.current.audio.current);
        }
    },[data.isSolve])

    return (
        <Row className='main_container'>
            <Col className='container'>
                {data.isRunning
                    ? <>
                        <Header data={data} />
                        <Question data={data} setData={setData} ref={audioPlayerQuestionRef} />
                        <Button data={data} setData={setData} />
                        <Body data={data} setData={setData} variants={gameData[data.category]} />
                    </>
                    : <Results data={data} setData={setData} />
                }
            </Col>
        </Row>
    )
}

export default App;
