document.onscroll=function (event) {
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
    //console.log(scrollTop);
    var navDesck=document.getElementById('hd-navigate');
    var navItems=document.getElementsByClassName('header-desk__navigate__item');
    var navIcon=document.getElementById('logo-icon');
    if (scrollTop>0){
        navDesck.style.backgroundColor="#fff";
        navIcon.style.fill='#000';
        for (var i=0;i<navItems.length;i++){
            navItems[i].classList.add('nav-item-black');
        }
    }
    else{
        navDesck.style.backgroundColor="transparent";
        navIcon.style.fill='#fff';
        for (var i=0;i<navItems.length;i++){
            navItems[i].classList.remove('nav-item-black');
        }
    }
}