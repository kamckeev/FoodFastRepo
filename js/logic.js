d3.csv("data/allFastFood.csv", function(fastFoodData){
    // console.log(fastFoodData)
    var ncData=fastFoodData.filter(data=>data.province == "NC")
    console.log(ncData)
    var restaurants = ncData.map(place =>place.name)
    console.log(restaurants)
    cleanNames=[]
    restaurants.forEach(function(item){
        item = item.replace("-"," ")
        item = item.replace("'","")
        item = item.replace(' of Rolesville','')
        
        cleanNames.push(item)
    })
    let uniqueNames = [...new Set(cleanNames)]
    totals=[]

    uniqueNames.forEach(function(item){
        function checkName(name) {
            return name == item
        }
        var num=cleanNames.filter(checkName).length
        var logolink=`<img src="//logo.clearbit.com/${item}.com">`
        totals.push({
            r:num*3,
            name: item,
            count: num,
            logo: logolink          
        })       
    })
    console.log(totals)
    var data = {
        "children": totals
    };
    console.log(data)
var packed = d3.packSiblings(data.children);

var w = 1200
var h = 1000
var svg = d3.select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("g")
  .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

var color = d3.scaleOrdinal(d3.schemeCategory10);

var nodes = svg.selectAll(null)
  .data(data.children)
  .enter()
  .append("circle")
  .attr("cx", function(d) {
    return d.x
  })
  .attr("cy", function(d) {
    return d.y
  })
  .attr("r", function(d) {
    return d.r
  })
  .style("fill", 'blue')
  .style('opacity',.5)
  
  
  
var toolTip = d3.select("body").append('div')
    .attr('class','tooltip')

nodes.on('mouseover',function(d, i) {
    toolTip.style("display", "block");
    toolTip.html(`${d.name} <br> ${d.count}<br> ${d.logo}`)
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY + "px")
    })
    .on("mouseout", function() {
        toolTip.style("display", "none")})
})
