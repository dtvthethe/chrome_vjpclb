$(document).ready(function() {
    $('.candich').css('pointer-events', 'none');
    $('.kqdich').css({
        'display': 'contents',
    });
    $('.kqdich .nddich').css({
        'background-color': '#ffffff',
        'font-style': 'italic',
        'width': '100%',
        'padding': '0px'
    });
    $('.slide .slide-content').css('display', 'block');
    $('.tab_container audio').css({
        'position': 'fixed',
        'top': '140px',
        'right': '0px',
        'border': '1px solid red',
        'background-color': 'red',
        'z-index': '10'
    });
});

 