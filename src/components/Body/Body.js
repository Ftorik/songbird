import {Col, Row} from "antd";
import test from "../../images/tvshows/selfdirector.jpg";
import AudioPlayer from "react-h5-audio-player";
import sounds from "../../utils/sounds";
import React from "react";

const data = [
    'Pimp my ride',
    'Fort Boyard',
    'Зов джунглей',
    'Сам себе режиссёр',
    'X Factor',
    'В мире животных'
];

const Body = () => {
    return(
        <Row className='row-items' style={{display: 'flex', justifyContent: 'space-between',}}>
            {/*Body items list - left*/}
            <Col className='items items_left'>
                <div className='container_items_left'>
                    {data.map(item => {
                        return <div key={item} className='item'>
                                        <span style={{
                                            borderRadius: '50%',
                                            height: 10,
                                            width: 10,
                                            backgroundColor: '#6CFD1F',
                                            display: 'inline-block'
                                        }} />
                            <span style={{
                                borderRadius: '50%',
                                height: 10,
                                width: 10,
                                backgroundColor: '#fe1f4f',
                                display: 'inline-block'
                            }} />
                            <span style={{
                                borderRadius: '10px',
                                height: 10,
                                width: 10,
                                border: '2px solid #9e9e9e',
                                backgroundColor: '#2b2b2c',
                                display: 'inline-block',
                                marginRight: 5
                            }} />
                            {item}
                        </div>
                    })
                    }
                </div>
            </Col>
            {/*Body active item list - right*/}
            <Col style={{flex: 2}}>
                <div className='row-items2' style={{
                    backgroundColor: '#230f1b',
                    color: '#fe1f4f',
                    border: '1px solid',
                    borderColor: '#fe1f4f',
                    borderRadius: 10,
                    flex: 1,
                    display: "flex"
                }}>
                    <div className='pic_player2' style={{flex: 1,}}>
                        <img alt='test_image2'
                             style={{borderRadius: 10}}
                             src={test}
                        />
                    </div>
                    <div style={{flex: 4, display: 'flex', color: '#fff',}}>
                        <div style={{flex: 1, display: 'flex', flexDirection: 'column',}}>
                            <div className='coded_word2'>SLOVO</div>
                            <div className='player_container2'>
                                <div style={{border: '1px solid', backgroundColor: '#fff',}} />
                                <div className='coded_word2 word_info'>TSDADSAAS</div>
                                <div style={{border: '1px solid', backgroundColor: '#fff',}} />
                                <div style={{marginTop: 20,}}>
                                    <AudioPlayer src={sounds.movies.ghostbusters}
                                                 style={{flex: 1}}
                                                 volume={0.33}
                                                 customAdditionalControls={[]}
                                                 showJumpControls={false}

                                    />
                                    <p className='word_info'>Козодой – неприметная птица, известная
                                        благодаря своему голосу. Песня козодоя звучит как монотонная трель
                                        похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката
                                        до рассвета, его тональность, частота и громкость изменяются.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Body;