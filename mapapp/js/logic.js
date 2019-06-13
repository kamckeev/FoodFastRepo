var circles = [];

// // Grab data with d3
d3.json("ff_geodataset.json", function(data) {
    console.log(data)
    createFeatures(data.features);
});
    function createFeatures(rest) {
      
      for (var i = 0; i <rest.length; i++) {
        var geo = rest[i].geometry;
        var properties = rest[i].properties;
        console.log(geo)
        if (geo) {
          circles.push(
          L.circle([geo.coordinates[1], geo.coordinates[0]])
          .bindPopup("<h3>" + properties.city +"</h3><hr><h4> Resturant: "+[properties.name]+"</h4>"+"<p>" + (properties.stars) + "</p>")
          );
      
      }}
      
  circles1 = L.featureGroup(circles);
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
      layers:[streetmap, circles1]
    });
  L.control.layers(baseMaps, streetmap,{
    collapsed:false
  }).addTo(myMap)};

  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);




    // function colors(mag) {
    //  var mag = feature.properties.name
    //   if (mag = "McDonald's") {
    //     return "#7E32EF"
    //   }
    //   else if ("Burger King") {
    //     return "#E931A6"
    //   }
      // else if (mag >=4) {
      //   return "#E98731"
      // }
      // else if (mag >=3) {
      //   return "#E9E931"
      // }
      // else if (mag >=2) {
      //   return "#7FFFD4"
      // }
      // else if (mag >= 1) {
      //   return "#B1F565"
      // }
    //   else {
    //     return "#DCDCDC"
    //   }
    // }
    // function radius(mag) {
    //   if (mag >6){
    //     return 34
    //   }
      
    //   else if (mag > 5) {
    //     return 21
    //   }
    //   else if (mag >4) {
    //     return 13
    //   }
    //   else if (mag >3) {
    //     return 8
    //   }
    //   else if (mag >2) {
    //     return 5
    //   }
    //   else if (mag >1) {
    //     return 3
    //   }
    //   else {
    //     return 2
    //   }
    // }
    // function eqstyle(feature){
    //   return {
        // radius: radius(feature.properties.mag),
    //     fillColor: colors(feature.properties.mag),
    //     color: colors(feature.properties.mag),
    //     weight: 1,
    //     opacity: 1,
    //     fillOpacity: 0.8
    //   }
    // })
    // markerLayer = L.geoJSON(data,
    //   {
    //     pointToLayer: function(geoJsonPoint, latlng) {
    //       return L.marker(latlng, {
    //         icon: function(p){
    //           return L.icon({
    //             iconSize: [100, 195],
    //             iconAnchor: [22, 94],
    //             popupAnchor: [-3, -76],
                // shadowUrl: 'my-icon-shadow.png',
                // shadowSize: [68, 95],
                // shadowAnchor: [22, 94]
      //       }) 
      //     }
      //   })
//       }}).addTo(myMap)

// })
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
