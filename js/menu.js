$(document).ready(function() {
  // variables
  var $menu = $('#select');
  var $img = $('.menu > img');
  var $first = $('#first');

  alert('Por favor dar click a la primera imagen y se redirecciona a la otra ventana en 5 segundos');
  $first.on('click', function() {
    redirect();
  });

  // evento
  $img.mouseover(function() {
    $img.addClass('hover');
  });
});

function redirect() {
  setTimeout(function() {
    window.location.href = '../views/restaurant.html';
  }, 5000);
}

