$(document).ready(function(){

    $(".show_sidebar").on( "click", function(){
        $(".sidebar").toggleClass("sidebar_mobile");
        $(".show_sidebar").css('display', 'none');
        $(".close_sidebar").css('display', 'block');
    });

    // ao clicar na class close sidebar irar aplicar a funcao//
    //toggleClass na class sidebar e verificar se existe a class sidebar mobile//
    //se existir irar remover. No close sidebar css-none irar ocultar o botão fechar//
    //e o css-block irar mostra novamente o botao sidebar //

    $(".close_sidebar").on( "click", function(){
        $(".sidebar").toggleClass("sidebar_mobile");
        $(".close_sidebar").css('display', 'none');
        $(".show_sidebar").css('display', 'block');
    });

    $(".title_expand").on( "click", function(){
        $(this).next().toggleClass('show_expand');
    });
});