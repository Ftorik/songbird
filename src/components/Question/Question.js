import {Col, Row} from "antd";
import unsolved from "../../images/unknow_pic.jpg";
import AudioPlayer from "react-h5-audio-player";
import React from "react";
import gameData from "../../utils/game_data";

const Question = () => {
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
                         src={unsolved}
                         width={200} height={155} />
                </div>
                <div style={{flex: 4, display: 'flex', color: '#fff',}}>
                    <div style={{flex: 1, display: 'flex', flexDirection: 'column',}}>
                        <div className='coded_word'>**********</div>
                        <div className='player_container'>
                            <div style={{border: '1px solid', backgroundColor: '#fff',}} />
                            <div style={{marginTop: 20,}}>
                                <AudioPlayer src={gameData[0][0].audio}
                                             volume={0.33}
                                             style={{flex: 1}}
                                             customAdditionalControls={[]}
                                             showJumpControls={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Question;