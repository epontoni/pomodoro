/*var transform_styles = ['-webkit-transform',
                        '-ms-transform',
                        'transform'];
window.randomize = function() {
 var rotation = Math.floor(Math.random() * 180);
 fill_rotation = rotation / 2;
 document.querySelector('.circle .fill').style.transform = `rotate(${fill_rotation}deg)`;
}*/

const numb = document.querySelector('.numb')
let counter = 1500; /* 1500 seg = 25 min */

setInterval(()=>{
    if(counter == 0) {
        clearInterval()
    } else {
        counter -= 1
        numb.textContent = `${Math.trunc(counter/60)}:${ (counter%60 < 10) && (counter%60 >= 0) ? '0' + counter%60 : counter%60}`;
    }
}, 1000)

/*let outer = document.querySelector('.outer')
let inner = document.querySelector('.inner')
let outer = document.querySelector('.outer')
let outer = document.querySelector('.outer')*/

