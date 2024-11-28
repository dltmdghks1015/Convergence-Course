$(document).ready(function () {
    $('.menu').hover(
        function () {
            $(this).find('.submenu')
                .stop(true, true)
                .css('opacity', 0)
                .slideDown(300)
                .animate({ opacity: 1 }, { queue: false, duration: 300 });
        },
        function () {
            $(this).find('.submenu')
                .stop(true, true)
                .animate({ opacity: 0 }, { queue: false, duration: 300 })
                .slideUp(300);
        }
    );
});
