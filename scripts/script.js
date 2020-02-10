//Смена стилизации меню при скроле от начала страницы
document.onscroll=function (event) {
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
    //console.log(scrollTop);
    var mobiControl=document.getElementById('menu__control');
        if ((scrollTop > 0) && !mobiControl.checked) {
            changeStyle(true);
        } else {
            changeStyle(false);
        }
   // }
};

document.getElementById('btn-mobi').addEventListener('click',function () {
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
    var mobiControl=document.getElementById('menu__control');
    if ((scrollTop > 0) && mobiControl.checked) {
        changeStyle(true);
    } else {
        changeStyle(false);
    }
});


function changeStyle(flag){
    var navDesck=document.getElementById('hd-navigate');
    var navMobi=document.getElementById('hm-navigate');
    var mobiControl=document.getElementById('menu__control');
    var navItems=document.getElementsByClassName('header__navigate__item');
    var navIcon=document.getElementsByClassName('header__logo_icon');
    if (flag==true){
        navDesck.style.backgroundColor = "#fff";
        navMobi.style.backgroundColor = "#fff";
        for (var i = 0; i < navIcon.length; i++) {
            navIcon[i].style.fill = '#000';
        }
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].classList.add('nav-item-black');
        }
    }
    else {
        navDesck.style.backgroundColor = "transparent";
        navMobi.style.backgroundColor = "transparent";
        for (var i = 0; i < navIcon.length; i++) {
            navIcon[i].style.fill = '#fff';
        }
        for (var i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('nav-item-black');
        }
    }
};



















