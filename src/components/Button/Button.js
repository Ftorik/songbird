import {Col, Row} from "antd";
import React from "react";

const Button = () => {
    return(
        <Row style={{marginBottom: 10}}>
            <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                {/*active button*/}
                {/*<div className='button'>*/}
                {/*inactive button*/}
                <div className='button_disabled'>
                    Следующий уровень
                </div>
            </Col>
        </Row>
    )
}

export default Button;