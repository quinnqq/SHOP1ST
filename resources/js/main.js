$(document).ready(function () {
    /*get scroll position*/
    $(window).on('load', function () {
        console.log($(window).scrollTop());
    });

    /*changenavbar*/
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var mainTop = $(".main").offset().top;
        console.log(scrollTop, mainTop, $('.topNav').height());
        if (scrollTop > mainTop) {
            $('.topNav').addClass('goDown');
            $('.bigNav').addClass('goTop');
        }
        if (scrollTop < mainTop) {
            $('.topNav').removeClass('goDown');
            $('.bigNav').removeClass('goTop');
        }
    });
    // mainSearch click
    $(".mainSearch").click(function () {
        $(".subSearch").addClass("showSubSearch");
        $(".mainSearch").hide();
    });
    // sublist click
    $(".mainList").click(function () {
        $(".subList").addClass("showSubList");
    });
    $(".close").click(function () {
        $(".subList").removeClass("showSubList");
    });
    $(".subListItem").click(function () {
        $(".subList").removeClass("showSubList");
    });

});

// 點擊換圖
document.querySelector(".cgSmImg-1").addEventListener("click", function () {
    document.querySelector(".cgLgImg").src = document.querySelector(".cgSmImg-1").src
})
document.querySelector(".cgSmImg-2").addEventListener("click", function () {
    document.querySelector(".cgLgImg").src = document.querySelector(".cgSmImg-2").src
})
document.querySelector(".cgSmImg-3").addEventListener("click", function () {
    document.querySelector(".cgLgImg").src = document.querySelector(".cgSmImg-3").src
})
document.querySelector(".cgSmImg-4").addEventListener("click", function () {
    document.querySelector(".cgLgImg").src = document.querySelector(".cgSmImg-4").src
})

// 加減數量
document.querySelector(".add").addEventListener("click", function () {
    document.querySelector(".num").innerHTML = parseInt(document.querySelector(".num").innerHTML) + 1
})
document.querySelector(".sub").addEventListener("click", function () {
    if (parseInt(document.querySelector(".num").innerHTML) < 1) {
        document.querySelector(".num").innerHTML = 0;
    }
    else {
        document.querySelector(".num").innerHTML = parseInt(document.querySelector(".num").innerHTML) - 1;
    }
})

// 加入購物車
document.querySelector(".addToCart").addEventListener("click", function () {
    document.querySelector(".cartNum").innerHTML = document.querySelector(".num").innerHTML
})