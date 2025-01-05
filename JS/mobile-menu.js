"use strict" 

const clickButtonOpen = document.querySelectorAll('.header .container .header__menu');
const headerButtonClose = document.querySelectorAll('.header .container .header__close-menu');
const leftMenu = document.querySelectorAll('.header .header__mobile-navigation');
const bannerContainer =  document.querySelectorAll('.banner .container');

clickButtonOpen[0].onclick = function(){

    if(leftMenu[0].classList.contains('inaction')){
        leftMenu[0].classList.remove('inaction');
        leftMenu[0].classList.add('action');
    }else{
        leftMenu[0].classList.remove('action');
        leftMenu[0].classList.add('inaction');
    }

    if(clickButtonOpen[0].classList.contains('active')){
        clickButtonOpen[0].classList.remove('active');
        clickButtonOpen[0].classList.add('inactive');
    }else{
        clickButtonOpen[0].classList.remove('inactive');
        clickButtonOpen[0].classList.add('active');
    }

    if(headerButtonClose[0].classList.contains('inactive')){
        headerButtonClose[0].classList.remove('inactive');
        headerButtonClose[0].classList.add('active');
    }else{
        headerButtonClose[0].classList.remove('active');
        headerButtonClose[0].classList.add('inactive');
    }

    if(bannerContainer[0].classList.contains('active')){
        // banner container
        bannerContainer[0].classList.remove('active');
        bannerContainer[0].classList.add('inactive');
    }else{
        // banner container
        bannerContainer[0].classList.remove('inactive');
        bannerContainer[0].classList.add('active');
    }
}

headerButtonClose[0].onclick = function()
    {
        if(headerButtonClose[0].classList.contains('active')){
            headerButtonClose[0].classList.remove('active');
            headerButtonClose[0].classList.add('inactive');
        }else{
            headerButtonClose[0].classList.remove('inactive');
            headerButtonClose[0].classList.add('active');
        } 

        if(clickButtonOpen[0].classList.contains('inactive')){
            clickButtonOpen[0].classList.remove('inactive');
            clickButtonOpen[0].classList.add('active');
        }else{
            clickButtonOpen[0].classList.remove('active');
            clickButtonOpen[0].classList.add('inactive');
        }

        if(leftMenu[0].classList.contains('action')){
            leftMenu[0].classList.remove('action');
            leftMenu[0].classList.add('inaction');
        }else{
            leftMenu[0].classList.remove('inaction');
            leftMenu[0].classList.add('action');
        }

        if(bannerContainer[0].classList.contains('inactive')){
            // banner container
            bannerContainer[0].classList.remove('inactive');
            bannerContainer[0].classList.add('active');
        }else{
            // banner Container
            bannerContainer[0].classList.remove('active');
            bannerContainer[0].classList.add('inactive');
        }
    }