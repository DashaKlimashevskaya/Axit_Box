"use strict" 

const clickButtonOpen = document.querySelectorAll('.header .container .header__menu');
const headerButtonClose = document.querySelectorAll('.header .container .header__close-menu');
const dropDownMenu = document.querySelectorAll('.header .header__mobile-navigation');
const bannerTittle =  document.querySelectorAll('.banner .container');
const bannerText =  document.querySelectorAll('.banner .container .banner__text');
const bannerBtn =  document.querySelectorAll('.banner .container .banner__btn');

clickButtonOpen[0].onclick = function(){

    if(dropDownMenu[0].classList.contains('inaction')){
        dropDownMenu[0].classList.remove('inaction');
        dropDownMenu[0].classList.add('action');
    }else{
        dropDownMenu[0].classList.remove('action');
        dropDownMenu[0].classList.add('inaction');
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

    if(bannerTittle[0].classList.contains('active')){
        // banner tittle
        bannerTittle[0].classList.remove('active');
        bannerTittle[0].classList.add('inactive');
        // banner text
        bannerText[0].classList.remove('active');
        bannerText[0].classList.add('inactive');
        // banner btn
        bannerBtn[0].classList.remove('active');
        bannerBtn[0].classList.add('inactive');
    }else{
        // banner tittle
        bannerTittle[0].classList.remove('inactive');
        bannerTittle[0].classList.add('active');
        // banner text
        bannerText[0].classList.remove('inactive');
        bannerText[0].classList.add('active');
         // banner btn
         bannerBtn[0].classList.remove('inactive');
         bannerBtn[0].classList.add('active');
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

        if(dropDownMenu[0].classList.contains('action')){
            dropDownMenu[0].classList.remove('action');
            dropDownMenu[0].classList.add('inaction');
        }else{
            dropDownMenu[0].classList.remove('inaction');
            dropDownMenu[0].classList.add('action');
        }

        if(bannerTittle[0].classList.contains('inactive') && bannerText[0].classList.contains('inactive') && bannerBtn[0].classList.contains('inactive')){
            // banner tittle
            bannerTittle[0].classList.remove('inactive');
            bannerTittle[0].classList.add('active');
            // banner text
            bannerText[0].classList.remove('inactive');
            bannerText[0].classList.add('active');
            // banner btn
            bannerBtn[0].classList.remove('inactive');
            bannerBtn[0].classList.add('active');
        }else{
            // banner tittle
            bannerTittle[0].classList.remove('active');
            bannerTittle[0].classList.add('inactive');
            // banner text
            bannerText[0].classList.remove('active');
            bannerText[0].classList.add('inactive');
             // banner btn
             bannerBtn[0].classList.remove('active');
             bannerBtn[0].classList.add('inactive');
        }
    }