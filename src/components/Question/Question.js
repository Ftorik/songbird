import {Col, Row} from "antd";
import unsolved from "../../images/unknow_pic.jpg";
import AudioPlayer from "react-h5-audio-player";
import React, {forwardRef} from "react";

const Question = forwardRef(({data},ref) => {

    let image = data.isSolve ? data.question.image : unsolved
    let answer = data.isSolve ? data.question.name : '**********'

    return (
        <Row style={{
            marginBottom: 10,
            display: "flex",
            color: '#fe1f4f',
            border: '1px solid',
            borderRadius: 10,
            backgroundColor: '#230f1b'
        }}>
            <Col className='row-items' style={{flex: 1, display: "flex"}}>
                <div className='pic_player' style={{flex: 1,}}>
                    <img alt='test_image'
                         style={{borderRadius: 10}}
                         src={image}
                         width={200} height={155} />
                </div>
                <div style={{flex: 4, display: 'flex', color: '#fff',}}>
                    <div style={{flex: 1, display: 'flex', flexDirection: 'column',}}>
                        <div className='coded_word'>{answer}</div>
                        <div className='player_container'>
                            <div style={{border: '1px solid', backgroundColor: '#fff',}} />
                            <div style={{marginTop: 20,}}>
                                <AudioPlayer src={data.question.audio}
                                             volume={0.4}
                                             style={{flex: 1}}
                                             customAdditionalControls={[]}
                                             showJumpControls={false}
                                             ref={ref}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
});

export default Question;