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
            <Row style={{backgroundColor:'#ffffff30',display:'flex', flexDirection:'column',alignItems:'center'}}>
                <Col style={{ width:'75%' }}>
                    {/*Header*/}
                    <Row style={{backgroundColor:'#17288e', marginBottom: 25, marginTop:20}}>
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
                    <Row style={{textAlign:'center',marginBottom: 25,  borderWidth:1, borderRadius:5, justifyContent:'space-around',fontWeight:500,backgroundColor:'white',userSelect:'none'}}>
                        <Col  style={{backgroundColor:'yellow',display:'block', paddingLeft:25,paddingRight:25 }}>TvShow</Col>
                        <Col  style={{backgroundColor:'lightgreen',display:'block', paddingLeft:25,paddingRight:25 }}>Series</Col>
                        <Col  style={{backgroundColor:'yellow',display:'block', paddingLeft:25,paddingRight:25}}>Movies</Col>
                        <Col  style={{backgroundColor:'lightgreen',display:'block', paddingLeft:25,paddingRight:25 }}>Cartoons</Col>
                        <Col  style={{backgroundColor:'yellow',display:'block', paddingLeft:25,paddingRight:25 }}>Anime</Col>
                        <Col  style={{backgroundColor:'lightgreen',display:'block',paddingLeft:25,paddingRight:25, }}>Games</Col>
                    </Row>
                    {/*Question: photo and audio player*/}
                    <Row style={{backgroundColor:'#ff0f0f40',marginBottom: 25,display:"flex"}}>
                        <Col className='row-items' style={{backgroundColor:'lightgreen',flex:1,display:"flex" }}>
                            <div className='pic_player' style={{flex:0,display:"block"}}>
                                <img alt='test_image' src='https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612' width={200} height={155}/>
                            </div>
                            <div style={{backgroundColor:'lightblue',display:'block',flex:1}}>Audioplayer + coded word</div>
                        </Col>
                    </Row>
                    {/*Button - next*/}
                    <Row style={{marginBottom: 25}}>
                        <Col span={24} style={{display:'flex', justifyContent:'center'}}>
                            {/*active button*/}
                            <button style={{display:'block', width:'100%', border:'1px solid', borderColor:'#fe1f4f', borderRadius:10,boxShadow: '2px 2px 5px #fe1f4f', backgroundColor:'#230f1b',color:'#fe1f4f'}} type="button">
                            {/*inactive button*/}
                            {/*<button style={{display:'block', width:'100%', border:'none', borderRadius:10, backgroundColor:'#2b2b2c',color:'gray'}} type="button">*/}
                                NEXT
                            </button>
                        </Col>
                    </Row>
                    {/*Body*/}
                    <Row className='row-items' style={{backgroundColor:'#f0ff0f40',display:'flex', justifyContent:'space-between',}}>
                        {/*Body items list - left*/}
                        <Col className='items' style={{flex:1,}}>
                            <div style={{backgroundColor:'#f0ff0f40'}}>
                                LEFT
                            </div>
                        </Col>
                        {/*Body active item list - right*/}
                        <Col style={{flex:2}} >
                            <div style={{backgroundColor:'#ffffff40',}}>
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
