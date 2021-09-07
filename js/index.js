let map;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

$('nav.btn').click(function(){
    $("#container").toggleClass('nav-list-container');
})


function myFunction(x) {
  if (x.matches) {
    $("#container").addClass('nav-list-container');
  }
}

var x = window.matchMedia("(min-width: 700px)")
myFunction(x)
x.addListener(myFunction)
