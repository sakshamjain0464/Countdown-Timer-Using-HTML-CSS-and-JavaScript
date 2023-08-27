let video = document.querySelector('.bg-video')
let audio =  document.querySelector(".bg-audio")
let minutesElement = document.querySelector('.minutes')
let secondsElement = document.querySelector('.seconds')

let minutes = null
let seconds = null

let timerClick = 0

video.pause()

let timer = null

function runTimer(){
    timer = setInterval(() => {
        if(minutes <= 0){
            clearInterval(timer)
            minutesElement.innerHTML = `00`
            secondsElement.innerHTML = `00`
            video.pause()
            audio.pause()
        }

        else{
            seconds--
            if(seconds <= 0){
                seconds = 59
                minutes--
            }  

            if(seconds<10){
                secondsElement.innerHTML = `0${seconds}`
            }else{
                secondsElement.innerHTML = `${seconds}`
            }

            if(minutes<10){
                minutesElement.innerHTML = `0${minutes}`
            }else{
                minutesElement.innerHTML = `${minutes}`
            }

            timerClick = 1
        }
    }, 1000)
}

function startTimer(){
    seconds = parseInt(secondsElement.innerHTML)
    minutes = parseInt(minutesElement.innerHTML)
    if(timerClick == 0){
        runTimer()
        video.play()
        audio.play()
    }
}

function stopTimer(){
    clearInterval(timer)
    timerClick = 0
    video.pause()
    audio.pause()
}

function repeat(){
    stopTimer()
    seconds = 0
    minutes = 60
    secondsElement.innerHTML = `0${seconds}`
    minutesElement.innerHTML = minutes
}