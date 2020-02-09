document.onscroll=function (event) {
    var scrollTop=window.pageYOffset || document.documentElement.scrollTop;
    //console.log(scrollTop);
    var navDesck=document.getElementById('hd-navigate');
    var navIcon=document.getElementById('icon');
    var navItems=document.getElementsByClassName('header-desk__navigate__item');
    if (scrollTop>0){

        navDesck.style.backgroundColor="#fff";
        navIcon.style.fill='#000';

        for (var i=0;i<navItems.length;i++){
            navItems[i].style.color='#000';
        }
    }
    else{
        navDesck.style.backgroundColor="transparent";
        navIcon.style.fill='#fff';
        for (var i=0;i<navItems.length;i++){
            navItems[i].style.color='#bfbfbf';
        }

    }
}