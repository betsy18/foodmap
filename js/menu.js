$(document).ready(function() {
  var $menu = $('#select');
  if ($menu.val('La Tranquera BBQ')) {
    juego(restaurant);
  } else if ($menu.val('EL 10 carnes y vinos')) {

  } else if ($menu.val('Baco y Vaca')) {

  };
  // console.log(restaurant);
});

function juego(obj) {
	var prop = Object.keys(obj);
	console.log(prop);
  for (var nombre in obj['La Tranquera BBQ']) {
		console.log(nombre);

	}
	
}