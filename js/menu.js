$(document).ready(main);

function main(){
    $('.bt-menu').click(function(){
            $('.nav-mobile').animate({
                left: '0'
            });
            contador = 0;
            console.dir('Mostrando...');
        
    });

    //Mostramos y Ocultamos submenus
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    })    
}

function fn_closeNav(){
    $('.close-nav').click(function(){
        $('.nav-mobile').animate({
            left: '-100%'
        });
        console.dir('Cerrando...');
    });
    
}