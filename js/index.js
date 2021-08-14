var transform_styles = ['-webkit-transform',
                        '-ms-transform',
                        'transform'];
window.randomize = function() {
 var rotation = Math.floor(Math.random() * 180);
 fill_rotation = rotation / 2;
 document.querySelector('.circle .fill').style.transform = `rotate(${fill_rotation}deg)`;
}