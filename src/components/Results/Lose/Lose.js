import React from "react";

const Lose = () => {
    return(
        <>
            <div style={{
                marginBottom: 20,
                marginTop: 10,
                color: "#fff",
                fontWeight: 500
            }}>Вы набрали *** баллов из *** возможных
            </div>
            <div className='button'>
                Попробовать ещё раз
            </div>
        </>
    )
}

export default Lose;