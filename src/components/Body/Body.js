import {Col, Row} from "antd";
import AudioPlayer from "react-h5-audio-player";
import sounds from "../../utils/sounds";
import React, {useEffect, useRef, useState} from "react";
import {onSuccess, onFail, displayDescription} from "../../utils/game_helpers";


const Body = ({variants, data, setData}) => {
    const [showDescription, setShowDescription] = useState(true);
    const audioRef = useRef(null);
    const checkboxesRef = useRef(null);
    const nameRef = useRef(null);
    const descriptionAudioRef = useRef(null);
    const descriptionRef = useRef(null);
    const imageRef = useRef(null);
    const originalRef = useRef(null);
    const infoRef = useRef(null);
    const activeOptionRef = useRef(null);

    useEffect(() => {
        [...checkboxesRef.current.children].forEach(item => item.firstChild.className = "indicator_off")
        setShowDescription(true)
        descriptionAudioRef.current.audio.current.pause()
    }, [data.category])

    useEffect(() => {
        displayDescription(showDescription, activeOptionRef, infoRef)
    }, [showDescription])

    return (
        <Row className='row-items' style={{display: 'flex', justifyContent: 'space-between',}}>
            <audio ref={audioRef} />
            <Col className='items items_left'>
                <div className='container_items_left' ref={checkboxesRef}>
                    {variants.map((item, index) => {
                        return <div key={index} className='item' onClick={(event) => {
                            setShowDescription(false)
                            nameRef.current.innerText = item.name;
                            descriptionRef.current.innerText = item.description;
                            originalRef.current.innerText = item.original;
                            imageRef.current.src = item.image;
                            descriptionAudioRef.current.audio.current.src = item.audio;

                            if (item.name === data.question.name) {
                                onSuccess(data, setData, event, audioRef, sounds)
                            } else {
                                onFail(data, setData, event, audioRef, sounds)
                            }
                        }
                        }>
                            <span className='indicator_off' />
                            {item.name}
                        </div>
                    })
                    }
                </div>
            </Col>
            <Col style={{flex: 2}} className="info_hide" ref={activeOptionRef}>
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
                        <img alt='description_image'
                             style={{borderRadius: 10}}
                             ref={imageRef}
                        />
                    </div>
                    <div style={{flex: 4, display: 'flex', color: '#fff',}}>
                        <div style={{flex: 1, display: 'flex', flexDirection: 'column',}}>
                            <div className='coded_word2' ref={nameRef}>name</div>
                            <div className='player_container2'>
                                <div style={{border: '1px solid', backgroundColor: '#fff',}} />
                                <div className='coded_word2 word_info' ref={originalRef}>original</div>
                                <div style={{border: '1px solid', backgroundColor: '#fff',}} />
                                <div style={{marginTop: 20,}}>
                                    <AudioPlayer
                                        ref={descriptionAudioRef}
                                        autoPlayAfterSrcChange={false}
                                        style={{flex: 1}}
                                        volume={0.4}
                                        customAdditionalControls={[]}
                                        showJumpControls={false}
                                    />
                                    <p className='word_info' ref={descriptionRef}>description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

            <Col style={{flex: 2}} ref={infoRef}>
                <div className='row-items2' style={{
                    backgroundColor: '#230f1b',
                    color: '#fe1f4f',
                    border: '1px solid',
                    borderColor: '#fe1f4f',
                    borderRadius: 10,
                    flex: 1,
                    display: "flex"
                }}>
                    <div className="word_info info_description">
                        <p style={{marginTop: 10, marginLeft: 10}}>Послушайте плеер. Выберите ответ из списка,
                            соответствующий саундтреку.</p>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default Body;