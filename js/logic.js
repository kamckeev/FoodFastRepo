d3.csv("data/allFastFood.csv", function(fastFoodData){
    var ncData=fastFoodData.filter(data=>data.province == "NC")
    console.log(ncData)
    var restaurants = ncData.map(place =>place.name)
    console.log(restaurants)
    cleanNames=[]
    restaurants.forEach(function(item){
        item = item.replace("McDonald's","McDonalds")
        item = item.replace("Quizno's","Quiznos")
        item = item.replace(' of Rolesville','')
        item = item.replace('SONIC Drive In','SONIC Drive-In')
        
        cleanNames.push(item)
    })
    let uniqueNames = [...new Set(cleanNames)]
    totals=[]

    uniqueNames.forEach(function(item){
        function checkName(name) {
            return name == item
        }
        var num=cleanNames.filter(checkName).length
        var logolink=''
       
        var cleanName =''
        
        cleanName = item.replace (/'/g,"")
        cleanName = cleanName.replace (/ /g,"")

        if (item == "Burger King") {
          logolink = "//logo.clearbit.com/bk.com"
        }
        else if (item == "Bojangles' Famous Chicken 'n Biscuits") {
          logolink = "//logo.clearbit.com/bojangles.com"
        }
        else if (item == "Papa John's Pizza") {
          logolink = "//logo.clearbit.com/papajohns.com"
        }
        else if (num >=5){
          logolink = `//logo.clearbit.com/${cleanName}.com`
        }
        else {
          logolink =''
        }

      var color=''
      // if (item == "Burger King"|| item == "Arby's"|| item == "Hardee's"||item == "Domino's Pizza"|| item == "Pizza Hut"|| item =="Wendy's"){
      //   color = "white"
      // }
      if (item == "McDonalds") {
        color = "#bd0016"
      }
      else if (item == "Subway") {
        color = "#028840"
      }
      else if (item == "Chick-Fil-A") {
        color = "#b00027"
      }
      else if (item == "Bojangles' Famous Chicken 'n Biscuits") {
        color = "#fdb646"
      }
      else if (item == "Panera Bread") {
        color = "#687718"
      }
      else if (item == "Papa John's Pizza") {
        color = "#bc121d"
      }
      else if (item == "Waffle House") {
        color = "black"
      }
      
      else {color='white'}




        totals.push({
            r:num*3,
            name: item,
            count: num,
            logo: logolink,
            color: color          
        })       
    })
    console.log(totals)
    var data = {
        "children": totals
    };
    console.log(data)
var packed = d3.packSiblings(data.children);

var w = 900
var h = 700
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
  .style("fill", d=>d.color)
  .style('stroke','black')
  // .style('stroke-width',2)
  .style('opacity',1)
  

  svg.selectAll(null)
  .data(data.children)
  .enter()
  .append('image')
  .attr('xlink:href',d=>d.logo)
  .attr('x',d=>d.x-(d.r/2))  
  .attr('y',d=>d.y-(d.r/2))
  .attr('width', d=>d.r)
  .attr('height',d=>d.r)

var toolTip = d3.select("body").append('div')
    .attr('class','tooltip')

nodes.on('mouseover',function(d, i) {
    toolTip.style("display", "block");
    toolTip.html(`${d.name} <br> ${d.count}`)
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY + "px")
    
    })
    .on("mouseout", function() {
        toolTip.style("display", "none")})





  // anime({
  //   targets: 'circle',
  //   translateX: 1000,
  //   easing: 'easeInOutExpo',
  //   delay: anime.stagger(50)
  // });
  // anime({
  //   targets: 'image',
  //   translateX: 1000,
  //   easing: 'easeInOutExpo',
  //   delay: anime.stagger(50)
  // });
  


})
