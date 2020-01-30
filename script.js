require (["esri/Map","esri/views/MapView","esri/WebMap","esri/widgets/BasemapGallery","esri/layers/GraphicsLayer","esri/widgets/Sketch","esri/layers/FeatureLayer"],function(Map, MapView,WebMap,BasemapGallery,GraphicsLayer,Sketch,FeatureLayer){
let map1 =new Map({basemap:"topo"});
//let map2=new Map({basemap:"satellite"})
//let map3=new Map({basemap:"osm"})
var graphicsLayer = new GraphicsLayer();
let map4 = new WebMap({portalItem: {
    id:"03dc4ed974e941cdb93f998b6ae35913"
    
 }, layers: [graphicsLayer]})


 var map = new Map({
  basemap: "topo-vector",
  //*** ADD ***//
  
  
});

let mapContainer= new MapView({
   container: "mapa",
   map: map4, 
   zoom:12,
   center: [22,51]
   
});
var basemapGallery = new BasemapGallery({
    view: mapContainer,
    source: {
      portal: {
        url: "https://www.arcgis.com",
        useVectorBasemaps: true  // Load vector tile basemaps
      }
    }
   
  });
    var trailheadsLayer = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
    });   
  
    

  var sketch = new Sketch({
    view: mapContainer,
    layer: graphicsLayer
  });

  mapContainer.ui.add(basemapGallery, "top-right");
  mapContainer.ui.add(sketch, "top-right");
  map4.add(trailheadsLayer);


 

})


