var streetmap = L.tileLayer(
//  "https://api.mapbox.com/styles/v1/saucyocelot/cjwnrc2ni2lvt1cnyney377u0?access_token={accessToken}", {
 "https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}",{
  
      attribution: "Map data &copy; <a href=\"https://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: API_KEY
    });
    
var baseMaps = {
  "Light Map": streetmap
};


var myMap=L.map("map-id", {
  center: [
    35.782169, -80.793457
  ],
  zoom: 7,
  layers:[streetmap]
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// // Link to GeoJSON
// var APILink = "http://data.beta.nyc//dataset/d6ffa9a4-c598-4b18-8caf-14abde6a5755/resource/74cdcc33-512f-439c-" +
// "a43e-c09588c4b391/download/60dbe69bcd3640d5bedde86d69ba7666geojsonmedianhouseholdincomecensustract.geojson";

// var geojson = ff_geodataset;
// console.log(geojson)


// // Grab data with d3
d3.json("ff_geodataset.json", function(data) {
    console.log(data)

    markerLayer = L.geoJSON(data,
      {
        pointToLayer: function(geoJsonPoint, latlng) {
          return L.marker(latlng, {
            icon: function(p){
              return L.icon({
                iconSize: [100, 195],
                iconAnchor: [22, 94],
                popupAnchor: [-3, -76],
                // shadowUrl: 'my-icon-shadow.png',
                // shadowSize: [68, 95],
                // shadowAnchor: [22, 94]
            }) 
          }
        })
      }}).addTo(myMap)

})
//   // Create a new choropleth layer
  //geojson = L.choropleth(data, {

//     // Define what  property in the features to use
    //valueProperty: "MHI",

//     // Set color scale
//     scale: ["#ffffb2", "#b10026"],

//     // Number of breaks in step range
//     steps: 10,

//     // q for quartile, e for equidistant, k for k-means
//     mode: "q",
//     style: {
//       // Border color
//       color: "#fff",
//       weight: 1,
//       fillOpacity: 0.8
//     },


//   }).addTo(myMap);


   

//   // Set up the legend
//   var legend = L.control({ position: "bottomright" });
//   legend.onAdd = function() {
//     var div = L.DomUtil.create("div", "info legend");
//     var limits = geojson.options.limits;
//     var colors = geojson.options.colors;
//     var labels = [];

//     div.innerHTML = legendInfo;

//     limits.forEach(function(limit, index) {
//       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
//     });

//     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
//     return div;
//   };

//   // Adding legend to the map
//   legend.addTo(myMap);

// });
