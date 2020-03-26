(function ($) {
    $(document).ready(function () {
        
        $('.open_modal').click(function (e) {
            e.preventDefault();
            $('.overlay').fadeIn('fast', function () {
                $('#nonebox-1').animate({
                    'top': '50%'
                }, 500);
            });
        });

        $('.box-close, .overlay').click(function (e) {
            e.preventDefault();
            $('.nonebox').animate({
                'top': '-1100px'
            }, 500, function () {
                $('.overlay').fadeOut('fast');
            });
        });
        
        if ($('.tabs').length > 0) {
            var myTabs = tabs({
                el: '#tabs',
                tabNavigationLinks: '.c-tabs-nav__link',
                tabContentContainers: '.c-tab'
            });
            myTabs.init();
        }

    });

})(jQuery);
