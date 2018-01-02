$(document).ready(function() {
  // variables
  var $menu = $('#select');
  var $img = $('.menu > img');
  // var $firts = $('.menu > img').first;

  if ($menu.val('miraflores')) {
    data(restaurant);
    // ejecutar();
  } else if ($menu.val('lince')) {
    
  } else if ($menu.val('sanIsidro')) {

  };


  // evento
  $img.mouseover(function() {
    $img.addClass('hover');
  });
});

// $firts.on('click', function(event) {
//   // event.preventDefault();
//   ejecutar();
// });

// function ejecutar() {
//   $('#modal').on('show.bs.modal', function(evento) {
//     console.log('Modal Mostrada con Evento de Boostrap');
//   });
// }


function data(obj) {
  obj.forEach(function(key, index) {
    var $nombre = key.nombre;
    var $direccion = key.direccion;
    var $plato1 = key.plato1[0];
    var $precio1 = key.plato1[1];
    var $foto = key.plato1[2];
    console.log($precio1);
    alert($nombre);
    alert($direccion);
    alert($plato1);
    alert($precio1);
  });
}
