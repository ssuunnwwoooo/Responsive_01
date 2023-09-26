$(function () {
    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).next().stop().slideToggle();
            //   $(this).parent().siblings().find('.submenu').slideUp();
        }

    });
    //if() 만약 header gnb가 on을 가지고있으면 ↓ 작동해라 
    //gnb를 클릭하면 submenu가 나옴. slideToggle은 한번 더 누르면 닫힘

    $('.mopen').on('click', function () {
        $('.header .gnb').toggleClass('on');

        //mopen을 클릭하면 header 안에 있는 gnb가 on이 된다
    })

    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.submenu').removeAttr('style');
    })
    //if후에도 메뉴 호버가안되면 쓰는것
    //removeAttr 사이즈가 작아지면 스타일이 빠진다.
})

