
$('.pais-item a').on('click', function(ev){
    var nombre_pais = $(this).find('span').html();
    window.localStorage.setItem('nombre_pais', nombre_pais);
});