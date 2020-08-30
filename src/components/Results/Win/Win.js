import win from "../../../images/won.gif";
import React, {useEffect, useRef} from "react";
import sounds from "../../../utils/sounds";


const Win = ({playAgain}) => {
    const audioRef = useRef(null);

    useEffect(()=>{
        audioRef.current.play()
    })

    return(
        <>
            <audio ref={audioRef} src={sounds.etc.applause} autoPlay loop/>
            <img alt='win' src={win} style={{backgroundColor: '#fff', borderRadius: 20}} />
            <div style={{
                marginBottom: 20,
                marginTop: 10,
                color: "#fff",
                fontWeight: 500
            }}>Поздравляем!
            </div>
            <div className='button' onClick={playAgain}>
                Сыграть ещё раз
            </div>
        </>
    )
}

export default Win;