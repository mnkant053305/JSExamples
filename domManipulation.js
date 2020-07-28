// event listener
document.querySelector('#switch-on').addEventListener('click',function () {
    document.querySelector('#bulb').src = 'https://github.com/mnkant053305/images/blob/master/bulb_on.png'
});

// anonymous function
document.querySelector('#switch-off').addEventListener('click',function () {
    document.querySelector('#bulb').src = 'https://github.com/mnkant053305/images/blob/master/bulb_off.png'
});
