(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{JUGT:function(e,t,o){"use strict";o.r(t);var l=o("8Y7J"),n=function(){console.log("MapModule::constructor")},r=o("pMnS"),a={disableDefaultUI:!0,gestureHandling:"none",mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:18,backgroundColor:"#1d2c4d",noClear:!0,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#255763"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]},i={path:google.maps.SymbolPath.FORWARD_CLOSED_ARROW,fillColor:"#bff",fillOpacity:.8,scale:10,strokeColor:"#4cf",strokeWeight:2},s={enableHighAccuracy:!0,timeout:5e3,maximumAge:0},c=function(){function e(){this.geoSpeed=0,this.geoHeading=0,this.geoAltitude=0,this.deviceAbsolute=!0,this.deviceBank=0,this.devicePitch=0,this.deviceDirection=0,this.deviceHeading=0,this.deviceHeadingAccuracy=0,console.log("MapComponent::constructor")}var t=e.prototype;return t.ngOnInit=function(){console.log("MapComponent::ngOnInit"),this.initMap()},t.ngAfterViewInit=function(){console.log("MapComponent::ngAfterViewInit")},t.ngOnDestroy=function(){console.log("MapComponent::ngOnDestroy("+this.watchPositionId+")"),navigator.geolocation.clearWatch(this.watchPositionId)},t.initMap=function(){var e=this;navigator.geolocation&&(navigator.geolocation.getCurrentPosition(function(t){e.geoLocation=new google.maps.LatLng(t.coords.latitude,t.coords.longitude),e.map=new google.maps.Map(e.mapElement.nativeElement,a),e.map.setCenter(e.geoLocation),e.marker=new google.maps.Marker,e.marker.setMap(e.map),e.marker.setPosition(e.geoLocation),e.marker.setIcon(i)},function(e){console.error(e.message)},s),this.watchPositionId=navigator.geolocation.watchPosition(function(t){e.geoLocation=new google.maps.LatLng(t.coords.latitude,t.coords.longitude),e.map.panTo(e.geoLocation),e.marker.setPosition(e.geoLocation),e.updateDashboard(t)},function(e){console.error(e.message)},s),window.addEventListener("deviceorientation",function(t){e.displayDeviceOrientation(t)},!0))},t.updateDashboard=function(e){this.geoSpeed=parseInt(Math.round(e.coords.speed).toFixed(0),10),this.geoHeading=parseInt(Math.round(e.coords.heading).toFixed(0),10),this.geoAltitude=parseInt(Math.round(e.coords.altitude).toFixed(0),10)},t.displayDeviceOrientation=function(e){this.deviceAbsolute=e.absolute,this.deviceBank=parseInt(Math.round(e.alpha).toFixed(0),10),this.devicePitch=parseInt(Math.round(e.beta).toFixed(0),10),this.deviceDirection=parseInt(Math.round(e.gamma).toFixed(0),10)},e}(),p=l.pb({encapsulation:0,styles:[["#googlemaps[_ngcontent-%COMP%]{height:100%;width:100%}"]],data:{}});function y(e){return l.Ib(0,[l.Fb(671088640,1,{mapElement:0}),(e()(),l.rb(1,0,[[1,0],["googlemaps",1]],null,0,"div",[["id","googlemaps"]],null,null,null,null,null))],null,null)}var u=l.nb("app-map",c,function(e){return l.Ib(0,[(e()(),l.rb(0,0,null,null,1,"app-map",[],null,null,null,y,p)),l.qb(1,4440064,null,0,c,[],null,null)],function(e,t){e(t,1,0)},null)},{},{},[]),d=o("iInd"),g=function(){console.log("MapRoutingModule::constructor")};o.d(t,"MapModuleNgFactory",function(){return m});var m=l.ob(n,[],function(e){return l.zb([l.Ab(512,l.j,l.Z,[[8,[r.a,u]],[3,l.j],l.v]),l.Ab(1073742336,d.l,d.l,[[2,d.q],[2,d.k]]),l.Ab(1073742336,g,g,[]),l.Ab(1073742336,n,n,[]),l.Ab(1024,d.i,function(){return[[{path:"",component:c}]]},[])])})}}]);