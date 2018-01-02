$(document).ready(function() {
  // variables
  var $menu = $('#select');
  var $img = $('.menu > img');
  var $first = $('#first');

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

