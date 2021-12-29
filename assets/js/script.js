// Smooth Scrolling
$('.scroll-link').on('click',function(e){
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    },1250,'easeInOutExpo');

    //console.log(tujuan);
    e.preventDefault();
});

//Paragraf
$(window).on('load',function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

// Parallax
$(window).scroll(function(){
    // Jumbotron
    var wScroll = $(this).scrollTop();
    $('.jumbotron img').css({
        'transform':'translate(0px, '+wScroll/4+'%)'
    });
    $('.jumbotron h1').css({
        'transform':'translate(0px, '+wScroll/2+'%)'
    });
    $('.jumbotron p').css({
        'transform':'translate(0px, '+wScroll/1.2+'%)'
    });

    // Portfolio
    if(wScroll >= $('#portfolio').offset().top - 200){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('show');
            },300 * (i+1));
        });
        
    }


});