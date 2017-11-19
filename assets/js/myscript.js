var map;
var nutri = new google.maps.LatLng(48.835511, 2.369812);
var nutri2 = new google.maps.LatLng(48.835511, 2.369812);

console.log('MYSCRIPT');
 
function initializeMap() {
 
 	var stylez = [
	{
	"featureType": "road",
	"stylers": [
	  { "color": "#DD3385" },
	  { "visibility": "simplified" }
	]
	},{
	"featureType": "road.highway",
	"elementType": "labels.text.fill",
	"stylers": [
	  { "color": "#FFFFFF" },
	  { "visibility": "on" }
	]
	},{
	"featureType": "road.arterial",
	"elementType": "labels",
	"stylers": [
	  { "color": "#FFFFFF" },
	  { "visibility": "on" }
	]
	},{
	"featureType": "road.arterial",
	"elementType": "labels.text.stroke",
	"stylers": [
	  { "visibility": "off" }
	]
	},{
	"featureType": "landscape",
	"stylers": [
	  { "color": "#000000" }
	]
	},{
	"featureType": "road.arterial",
	"elementType": "labels.icon",
	"stylers": [
	  { "visibility": "off" }
	]
	},{
	"featureType": "poi",
	"stylers": [
	  { "visibility": "off" }
	]
	},{
	"featureType": "road.highway",
	"elementType": "labels",
	"stylers": [
	  { "visibility": "off" }
	]
	},{
	"featureType": "road.highway",
	"elementType": "labels.text",
	"stylers": [
	  { "visibility": "off" }
	]
	},{
	"featureType": "administrative",
	"stylers": [
	  { "visibility": "off" }
	]
	},{
	"featureType": "transit",
	"stylers": [
	  { "visibility": "off" }
	]
	},{
	"featureType": "transit.line",
	"stylers": [
	  { "color": "#111111" },
	  { "visibility": "on" }
	]
	},{
	"featureType": "transit.station.rail",
	"stylers": [
	  { "visibility": "on" },
	  { "invert_lightness": true },
	  { "weight": 0.1 }
	]
	},{
	"featureType": "road.local",
	"stylers": [
	  { "visibility": "off" }
	]
	},{
	"featureType": "road.arterial"  },{
	"featureType": "water",
	"stylers": [
	  { "color": "#674894" }
	]
	},{
	"featureType": "water",
	"elementType": "labels",
	"stylers": [
	  { "visibility": "off" }
	]
	},{
	"featureType": "administrative",
	"stylers": [
	  { "visibility": "off" }
	]}];

	function toggleBounce() {

		if (marker.getAnimation() != null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}


	var mapOptions = {
		zoom: 12,
		center: nutri2,
		panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
		styles:stylez
	 };
 
	map = new google.maps.Map(document.getElementById("map_canvas"),
 	mapOptions);
 
 
 
	var marker = new google.maps.Marker({
		    position: nutri,
		    map: map,
		    title:"NUTRIMARKETING",
		    icon:'/images/markerNutri.png',
	    	animation: google.maps.Animation.DROP,
	});
	marker.setAnimation(google.maps.Animation.BOUNCE);
	google.maps.event.addListener(marker, 'click', toggleBounce);
}















 initializeMap()
