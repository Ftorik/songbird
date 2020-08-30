import React from "react";

const Lose = ({score, playAgain}) => {
    return (
        <>
            <div style={{
                marginBottom: 20,
                marginTop: 10,
                color: "#fff",
                fontWeight: 500
            }}>Вы набрали {score} из 30 возможных баллов
            </div>
            <div className='button' onClick={()=>playAgain()}>
                Попробовать ещё раз
            </div>
        </>
    )
}

export default Lose;