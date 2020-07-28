// event listener
document.querySelector('#switch-on').addEventListener('click',function () {
    document.querySelector('#bulb').src = '../images/bulb_on.png'
});

// anonymous function
document.querySelector('#switch-off').addEventListener('click',function () {
    document.querySelector('#bulb').src = '../images/bulb_off.png'
});
