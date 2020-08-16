import React, {useEffect, useState} from 'react';
import {Row, Col,} from 'antd';
import 'react-h5-audio-player/lib/styles.css';
import './App.css';

import Header from "./Header/Header";
import Button from "./Button/Button";
import Question from "./Question/Question";
import Body from "./Body/Body";
import Results from "./Results/Results";

import gameData from "../utils/game_data";
import {getRandomSoundFromData} from "../utils/game_helpers";

const App = () => {
    const [isRunning, setIsRunning] = useState(true);
    const [score, setScore] = useState(0);
    const [category, setCategory] = useState(0);
    const [question, setQuestion] = useState(getRandomSoundFromData(gameData[category]));
    const [attempt, setAttempt] = useState(0);
    const [questionReward, setQuestionReward] = useState(5);
    const [isSolve, setIsSolve] = useState(false);

    useEffect(() => {
        console.log('App: ',question.name,isSolve)
    })


    return (
        <Row className='main_container'>
            <Col className='container'>
                {isRunning
                    ? <>
                        <Header score={score} category={category}/>
                        <Question question={question} isSolve={isSolve} />
                        <Button isSolve={isSolve}/>
                        <Body />
                    </>
                    : <Results score={score}/>
                }
            </Col>
        </Row>
    )
}

export default App;
