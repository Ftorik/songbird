const getRandomArrayIndex = array => Math.floor(Math.random() * array.length);

export const getRandomSoundFromData = array => array[getRandomArrayIndex(array)]

export const getScoreForAttempt = attempt => 5 - attempt;

export const stopPlayer = audioPlayer => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}

export const displayDescription = (description,activeBlock,infoBlock) => {
    if(description){
        activeBlock.current.classList.add("info_hide")
        infoBlock.current.classList.remove("info_hide")
    }else{
        infoBlock.current.classList.add("info_hide")
        activeBlock.current.classList.remove("info_hide")
    }
}

export const onSuccess = (data,setData,event,audioRef,sounds) => {
    if (!data.isSolve) {
        setData({
            ...data,
            score: data.score + getScoreForAttempt(data.attempt),
            isSolve: true
        })
        event.currentTarget.firstChild.className = 'indicator_green'
        audioRef.current.src = `${sounds.etc.right}`
        audioRef.current.play()
    }
}

export const onFail = (data,setData,event,audioRef,sounds) => {
    if (data.isSolve || event.currentTarget.firstChild.className === 'indicator_red') {
    } else {
        event.currentTarget.firstChild.className = 'indicator_red'
        audioRef.current.src = `${sounds.etc.wrong}`
        audioRef.current.play()
        setData({...data, attempt: data.attempt + 1})
    }
}