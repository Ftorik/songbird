import {Col, Row} from "antd";
import React, {useEffect, useState} from "react";
import Win from "./Win/Win";
import Lose from "./Lose/Lose";

const Results = ({data, setData}) => {

    const [offset, setOffset] = useState(window.innerHeight * 25 / 100)
    const maxScore = 30;

    const playAgain = () => {
        setData({
            isRunning: true,
            score: 0,
            category: 0,
            question: 0,
            attempt: 0,
            isSolve: false,
        })
    }

    useEffect(() => {
        const changeOffset = () => setOffset(window.innerHeight * 25 / 100)
        const resize = () => {
            window.addEventListener('resize', changeOffset);
        }
        resize()
        return () => window.removeEventListener('resize', resize)
    })

    return (
        <Row>
            <Col span={24}
                 style={{
                     display: 'flex',
                     alignItems: 'center',
                     flexDirection: 'column',
                     marginTop: offset
                 }}>
                {data.score === maxScore ? <Win playAgain={playAgain} /> : <Lose score={data.score} playAgain={playAgain} />}
            </Col>
        </Row>
    )
}

export default Results;