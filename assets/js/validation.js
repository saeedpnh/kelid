(function () {
    var audio = new Audio('assets/beep.wav');
    $('form input').on('keyup', function () {
        if ($(this).val() >= '0' && $(this).val() <= '4') {
            $(this).addClass('valid');
        } else {
            audio.play();
            $(this).removeClass('valid');
        }
    });
})();