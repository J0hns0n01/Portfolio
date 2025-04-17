(function($) {
    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px']
    });

    // Scrolly.
    $('.scrolly').scrolly();

    // Nav.
    var $nav = $('#nav');

    // Title-bar click behavior.
    $nav.find('.title-bar').on('click', function() {
        $(this).toggleClass('active');
        $nav.find('.links').toggleClass('active');
    });

    // Scrolly behavior.
    $nav.find('.links a').on('click', function() {
        $nav.find('.title-bar').removeClass('active');
        $nav.find('.links').removeClass('active');
    });

    // Header.
    var $header = $('#header');

    // Parallax background.
    breakpoints.on('<=medium', function() {
        $header.css('background-attachment', 'scroll');
    });

    breakpoints.on('>medium', function() {
        $header.css('background-attachment', 'fixed');
    });

    // Form.
    var $form = $('form');

    // Events.
    $form.on('submit', function(event) {
        event.preventDefault();

        var $this = $(this),
            $message = $('<div class="message"></div>');

        // Add message.
        $message
            .appendTo($this)
            .html('Thank you for your message!')
            .fadeIn();

        // Reset form.
        $this.find('input, textarea').val('');

        // Remove message after 3 seconds.
        setTimeout(function() {
            $message.fadeOut(function() {
                $message.remove();
            });
        }, 3000);
    });
})(jQuery);
