const navigation = $('nav');
const navSpeed = 750;
const soundNav = new Audio('./sfx/nav.mp3');

$('.nav-toggle').on('click', toggleNav)
  
$('nav .close').on('click', toggleNav);
  

function toggleNav(bool = null) {
    soundNav.play();
    if (bool == true || navigation.hasClass('active')) {
        navigation.removeClass('active');
        navigation.animate({
            left: '100%',
        }, navSpeed, function() {
            navigation.find('li div').removeClass('fadeIn');
            navigation.find('.close').removeClass('show');
            navigation.css({
                left: '-100%',
            })
        })
    } else if (bool == false || !navigation.hasClass('active')) {
        navigation.addClass('active');
        navigation.animate({
            left: 0,
        }, navSpeed, function() {
            navigation.find('li div').each(function(i) {
                (function(self, j) {
                    setTimeout(function() {
                        $(self).addClass('fadeIn');
                    },(j*100)+100);
                })(this, i);
            });
        
            navigation.find('.close').addClass('show');
        })
    }
}

$('nav ol li div span').on('click', function() {
    refreshContent($(this).data('next-state'))
    toggleNav(false);
})
