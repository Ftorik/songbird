import React from 'react';
import './App.css';
import {Row, Col} from 'antd';
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

    return (
        <>
            <Row style={{backgroundColor:'#ffffff30'}}>
                <Col style={{backgroundColor:'#0000ff40'}} offset={2} span={20}>
                    {/*Header*/}
                    <Row style={{backgroundColor:'#ff00ff40', paddingBottom: 20}}>
                        {/*Header Logo left*/}
                        <Col span={12}>
                            <img alt='test_image' src='https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612' width={200} height={155}/>
                        </Col>
                        {/*Header Score right*/}
                        <Col span={12} style={{backgroundColor:'#f0ff0f40',display:"flex", justifyContent:"flex-end", alignItems:'flex-end'}}>
                            <div style={{backgroundColor:'#ffffff40'}}>
                                SCORE
                            </div>
                        </Col>
                    </Row>
                    {/*Breadcrumbs*/}
                    <Row style={{backgroundColor:'#ffffff40'}}>
                        <Col span={24}>BREADCRUMBS</Col>
                    </Row>
                    {/*Question: photo and audio player*/}
                    <Row style={{backgroundColor:'#ff0f0f40'}}>
                        <Col span={24}>PHOTO + PLAYER</Col>
                    </Row>
                    {/*Body*/}
                    <Row style={{backgroundColor:'#f0ff0f40'}}>
                        {/*Body items list - left*/}
                        <Col span={12}>
                            <div style={{backgroundColor:'#f0ff0f40'}}>
                                LEFT
                            </div>
                        </Col>
                        {/*Body active item list - right*/}
                        <Col span={12}>
                            <div style={{backgroundColor:'#ffffff40'}}>
                                RIGHT
                            </div>
                        </Col>
                    </Row>
                    {/*Button - next*/}
                    <Row style={{backgroundColor:'#00ffff40'}}>
                        <Col span={24} style={{display:'flex', justifyContent:'center'}}>
                            <button style={{display:'block', width:'100%', border:'none', borderRadius:5, backgroundColor:'green'}} type="button">
                                NEXT
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default App;
