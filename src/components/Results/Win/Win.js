import win from "../../../images/won.gif";
import React from "react";

const Win = () => {
    return(
        <>
            <img alt='win' src={win} style={{backgroundColor: '#fff', borderRadius: 20}} />
            <div style={{
                marginBottom: 20,
                marginTop: 10,
                color: "#fff",
                fontWeight: 500
            }}>Поздравляем!
            </div>
            <div className='button'>
                Сыграть ещё раз
            </div>
        </>
    )
}

export default Win;