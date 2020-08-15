import React from 'react';
import {Row, Col,} from 'antd';
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import './App.css';

import logo from '../images/LOGO.png'
import unsolved from '../images/unknow_pic.jpg'
import sounds from '../utils/sounds';

const App = () => {
    const data = [
        'Pimp my ride',
        'Fort Boyard',
        'Зов джунглей',
        'Сам себе режиссёр',
        'X Factor',
        'В мире животных'
    ];
    return (
        <>
            <Row style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Col className='container'>
                    {/*Header*/}
                    <Row style={{marginTop: 5}}>
                        {/*Header Logo left*/}
                        <Col span={12}>
                            <img alt='test_image'
                                 src={logo}
                                 style={{borderTopLeftRadius: 20, marginBottom: -18, zIndex: -1, position: "relative"}}
                                 width={120} height={100} />
                        </Col>
                        {/*Header Score right*/}
                        <Col span={12} style={{display: "flex", justifyContent: "flex-end", alignItems: 'flex-end'}}>
                            <div style={{color: 'white'}}>
                                Score: 0
                            </div>
                        </Col>
                    </Row>
                    {/*Breadcrumbs*/}
                    <Row style={{
                        zIndex: 99,
                        lineHeight: 2,
                        textAlign: 'center',
                        color: '#fe1f4f',
                        marginBottom: 10,
                        border: '1px solid',
                        borderRadius: 10,
                        justifyContent: 'space-around',
                        fontWeight: 500,
                        backgroundColor: '#230f1b',
                        userSelect: 'none'
                    }}>
                        <Col style={{display: 'block', paddingLeft: 12, paddingRight: 12, color: '#fff'}}>TvShow</Col>
                        <Col style={{display: 'block', paddingLeft: 12, paddingRight: 12, color: '#fff'}}>Series</Col>
                        <Col
                            style={{display: 'block', paddingLeft: 12, paddingRight: 12, color: '#fe1f4f'}}>Movies</Col>
                        <Col style={{
                            display: 'block',
                            paddingLeft: 12,
                            paddingRight: 12,
                            color: '#fff'
                        }}>Cartoons</Col>
                        <Col style={{display: 'block', paddingLeft: 12, paddingRight: 12, color: '#fff'}}>Anime</Col>
                        <Col style={{display: 'block', paddingLeft: 12, paddingRight: 12, color: '#fff'}}>Games</Col>
                    </Row>
                    {/*Question: photo and audio player*/}
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
                                            <AudioPlayer src={sounds.etc.wrong}
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
                    {/*Button - next*/}
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
                    {/*Body*/}
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
                                    <img alt='test_image'
                                         style={{borderRadius: 10}}
                                         src='https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612'
                                         width={200} height={155} />
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
                </Col>
            </Row>
        </>
    )
}

export default App;
