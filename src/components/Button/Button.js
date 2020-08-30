import {Col, Row} from "antd";
import React, {useEffect} from "react";
import {getRandomSoundFromData} from "../../utils/game_helpers";
import gameData from "../../utils/game_data";


const Button = ({data, setData}) => {

    const nextLevelHandler = () => {
        let lastCategory = 5;
        if (data.category === lastCategory) {
            setData({...data, isRunning: false})
        } else {
            setData({
                ...data,
                category: data.category + 1,
                isSolve: false
            });
        }
    };

    useEffect(() => {
        setData({...data, attempt:0, question: getRandomSoundFromData(gameData[data.category])})
    }, [data.category])

    useEffect(() => {
        if (data.question) {
            console.log(`%c ${data.question.name} `, 'color:#6CFD1F; background:#222A12;')
        }
    }, [data.question])

    return (
        <Row style={{marginBottom: 10}}>
            <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                <div className={data.isSolve ? 'button' : 'button_disabled'}
                     onClick={data.isSolve ? () => nextLevelHandler() : null}>
                    Следующий уровень
                </div>
            </Col>
        </Row>
    )
}

export default Button;