'use strict';

//Mover elemento por la pagina
$('.elemento').draggable();

//Redimensionar
$('.elemento').resizable();

//Seleccionar
$('.lista-seleccionable').selectable();

//Listar y ordenar
//no funciona a la vez que selectable()
$('.lista-seleccionable').sortable({
  update: function (event, ui) {
    console.log('ha cambiado la lista');
  },
});

//Drop
$('#elemento-movido').draggable();
$('#area').droppable({
  drop: function () {
    console.log('has soltado algo dentro');
  },
});

//Efectos (explode,slide,drop...)
$('#mostrar').click(function () {
  $('.caja-efectos').fadeToggle();
});
