function initMap(){
  let mapProp ={
    center: new google.maps.LatLng(37,-132),
    zoom:15
  }
  let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
initMap();