import {Col, Row} from "antd";
import React from "react";

const Button = ({isSolve}) => {
    // console.log('Button - isSolve: ',isSolve)
    return(
        <Row style={{marginBottom: 10}}>
            <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                <div className={isSolve? 'button':'button_disabled'}>
                    Следующий уровень
                </div>
            </Col>
        </Row>
    )
}

export default Button;