$(document).ready(function() {
// var $modal = $('#modal');
// $('#modalRes').modal('show');
  console.log(data(restaurant));
  alert('La ventana se redireccionara dentro de 6 segundos');
  redirect();
});

function data(obj) {
  obj.forEach(function(key, index) {
    var $nombre = key.nombre;
    var $direccion = key.direccion;
    var $plato1 = key.plato1[0];
    var $precio1 = key.plato1[1];
    var $plato2 = key.plato2[0];
    var $precio2 = key.plato2[1];
    var $plato3 = key.plato3[0];
    var $precio3 = key.plato3[1];
    console.log($nombre);
    console.log($direccion);
    console.log($plato1);
    console.log($precio1);
    $('.plato1').append('<p>' + 'Restaurant: ' + $nombre + '</p>' + '<br>');
    $('.plato1').append('<p>' + 'Direccion: ' + $direccion + '</p>' + '<br>');
    $('.plato1').append('<p>' + 'Plato: ' + $plato1 + '</p>' + '<br>');
    $('.plato1').append('<p>' + 'Precio: ' + $precio1 + '</p>' + '<br>');
    $('.plato2').append('<p>' + 'Plato: ' + $plato2 + '</p>' + '<br>');
    $('.plato2').append('<p>' + 'Precio: ' + $precio2 + '</p>' + '<br>');
    $('.plato3').append('<p>' + 'Plato: ' + $plato3 + '</p>' + '<br>');
    $('.plato3').append('<p>' + 'Precio: ' + $precio3 + '</p>' + '<br>');
  });

  function redirect() {
    setTimeout(function() {
      window.location.href = '../views/menu.html';
    }, 5000);
  }
}