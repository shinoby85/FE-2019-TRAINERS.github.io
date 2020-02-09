//Отвечает за плавную прокрутку на странице
$(document).ready(function(){
    // плавное перемещение страницы к нужному блоку
    $("#menu a").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
    $("#btn_down").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 800);
    });
});