import {Col, Row} from "antd";
import React, {useEffect, useState} from "react";
import Win from "./Win/Win";
import Lose from "./Lose/Lose";

const Results = () => {

    const testCondition = true;

    const [offset, setOffset] = useState(window.innerHeight * 25 / 100)

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
                {testCondition ? <Win /> : <Lose/>}
            </Col>
        </Row>
    )
}

export default Results;