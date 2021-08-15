import { IntervalTimer } from './timer.js';

const numb = document.querySelector('.numb')
let counter = 1500; /* 1500 seg = 25 min */

let timer;

const btnStart = document.querySelector('#start')
const btnPause = document.querySelector('#pause')

btnStart.addEventListener('click', handleStart)
btnPause.addEventListener('click', handlePause)

function handleStart(){
    console.log('Comenzanod el timer....')
    timer = new IntervalTimer(function () {
        if(counter == 0) {
            clearInterval()
        } else {
            counter -= 1
            numb.textContent = `${Math.trunc(counter/60)}:${ (counter%60 < 10) && (counter%60 >= 0) ? '0' + counter%60 : counter%60}`;
        }
    }, 1000);
    btnPause.disabled = false
    this.disabled = true
    document.querySelector('.circle .left .progress').style.animationPlayState = 'running'
    document.querySelector('.circle .right .progress').style.animationPlayState = 'running'
    document.querySelector('.circle .dot').style.animationPlayState = 'running'
}

function handlePause(){
    timer.pause()
    btnPause.disabled = true
    btnStart.disabled = false
    document.querySelector('.circle .left .progress').style.animationPlayState = 'paused'
    document.querySelector('.circle .right .progress').style.animationPlayState = 'paused'
    document.querySelector('.circle .dot').style.animationPlayState = 'paused'
}

