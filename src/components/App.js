import React from 'react';
import './App.css';
import {Row, Col, List} from 'antd';
// import logo from '../logo.svg';

// function App() {
//     return (
//         <div className="App">
//             <div className="line"></div>
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <h1 className='line'>Hello World</h1>
//                 <h1 className='test'>Test div text</h1>
//             </header>
//         </div>
//     );
// }

const App = () => {
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    return (
        <>
            <Row style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Col style={{width: '75%'}}>
                    {/*Header*/}
                    <Row style={{marginBottom: 25, marginTop: 20}}>
                        {/*Header Logo left*/}
                        <Col span={12}>
                            <img alt='test_image'
                                 src='https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612'
                                 width={200} height={155} />
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
                        lineHeight: 2,
                        textAlign: 'center',
                        color: '#fe1f4f',
                        marginBottom: 25,
                        border: '1px solid',
                        borderRadius: 10,
                        justifyContent: 'space-around',
                        fontWeight: 500,
                        backgroundColor: '#230f1b',
                        userSelect: 'none'
                    }}>
                        <Col style={{display: 'block', paddingLeft: 24, paddingRight: 12, color: 'white'}}>TvShow</Col>
                        <Col style={{display: 'block', paddingLeft: 12, paddingRight: 12}}>Series</Col>
                        <Col style={{display: 'block', paddingLeft: 12, paddingRight: 12}}>Movies</Col>
                        <Col style={{display: 'block', paddingLeft: 12, paddingRight: 12}}>Cartoons</Col>
                        <Col style={{display: 'block', paddingLeft: 12, paddingRight: 12}}>Anime</Col>
                        <Col style={{display: 'block', paddingLeft: 12, paddingRight: 24,}}>Games</Col>
                    </Row>
                    {/*Question: photo and audio player*/}
                    <Row style={{
                        marginBottom: 25,
                        display: "flex",
                        color: '#fe1f4f',
                        border: '1px solid',
                        borderRadius: 10,
                        backgroundColor: '#230f1b'
                    }}>
                        <Col className='row-items' style={{flex: 1, display: "flex"}}>
                            <div className='pic_player' style={{flex: 0, display: "block"}}>
                                <img alt='test_image'
                                     src='https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612'
                                     width={200} height={155} />
                            </div>
                            <div style={{display: 'block', flex: 1, color: '#fff'}}>
                                <div style={{width: '90%'}}>
                                    <div style={{alignItems: "center", flex: 1}}>****** Word</div>
                                    <div style={{border: '1px solid', color: '#3c3946'}} />
                                    <p>Audioplayer + coded word</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {/*Button - next*/}
                    <Row style={{marginBottom: 25}}>
                        <Col span={24} style={{display: 'flex', justifyContent: 'center'}}>
                            {/*active button*/}
                            <button style={{
                                display: 'block',
                                width: '100%',
                                border: '1px solid',
                                borderColor: '#fe1f4f',
                                borderRadius: 10,
                                backgroundColor: '#230f1b',
                                color: '#fe1f4f',
                                boxShadow: '2px 2px 5px #fe1f4f',
                            }} type="button">
                                {/*inactive button*/}
                                {/*<button style={{display:'block', width:'100%', border:'1px solid', borderRadius:10, backgroundColor:'#2b2b2c',color:'gray'}} type="button">*/}
                                NEXT
                            </button>
                        </Col>
                    </Row>
                    {/*Body*/}
                    <Row className='row-items' style={{display: 'flex', justifyContent: 'space-between',}}>
                        {/*Body items list - left*/}
                        <Col className='items' style={{flex: 1,}}>
                            <div style={{
                                backgroundColor: '#230f1b',
                                color: '#fe1f4f',
                                border: '1px solid',
                                borderColor: '#fe1f4f',
                                borderRadius: 10,
                            }}>
                                LEFT
                                <List
                                    size="small"
                                    dataSource={data}
                                    renderItem={item =>
                                        <List.Item style={{borderColor: '#fe1f4f',color:'#fff'}}>
                                            {item}
                                        </List.Item>}
                                />
                            </div>
                        </Col>
                        {/*Body active item list - right*/}
                        <Col style={{flex: 2}}>
                            <div style={{
                                backgroundColor: '#230f1b',
                                color: '#fe1f4f',
                                border: '1px solid',
                                borderColor: '#fe1f4f',
                                borderRadius: 10,
                            }}>
                                RIGHT
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default App;
