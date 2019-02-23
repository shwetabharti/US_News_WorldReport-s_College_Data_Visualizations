var colors = d3.schemeCategory10;
var pieColor = d3.scaleOrdinal().range(d3.schemeCategory20);

/*If barChart, then 0, else 1*/
var barOrPie = 0;
var firstTime = 1;
var svg = d3.select("svg"),
    margin = 200,
    width = svg.attr("width") - margin,
    height = svg.attr("height") - margin

var g;
var radius = Math.min(width, height) / 2;

var xScale = d3.scaleBand().range([0, width]).padding(0.25);
var yScale = d3.scaleLinear().range([height, 0]);

function chartTitle(title){
  svg.append("text")
     .attr("transform", "translate(100,0)")
     .attr("x", 200)
     .attr("y", 15)
     .attr("font-size", "20px")
     .text(title)
}

function updateVariable(value){
  d3.csv("college.csv", function(error, data) {
                                     if (error) {
                                         throw error;
                                     }
   svg.selectAll("text")
      .remove()
      .exit()

   d3.selectAll("g")
   .remove()
   .exit()

    switch (value) {
      case "Top10perc":
        var top10percData = data.map(function(d) {return d.Top10perc});
        console.log("Received Input is: top10percData with data column: " + top10percData)
        top10Chart(top10percData);
        break;
      case "Top25perc":
        var top25percData = data.map(function(d) {return d.Top25perc});
        console.log("Received Input is: top25percData with data column: " + top25percData)
        top25Chart(top25percData);
        break;
      case "Outstate":
        var outstateData = data.map(function(d) {return d.Outstate});
        console.log("Received Input is: outstateData with data column: " + outstateData)
        outstateChart(outstateData);
        break;
      case "Grad_Rate":
        var gradRateData = data.map(function(d) {return d.Grad_Rate});
        console.log("Received Input is: Grad_Rate with data column: " + gradRateData)
        gradRateChart(gradRateData);
        break;
      case "Room_Board":
        var roomBoardData = data.map(function(d) {return d.Room_Board});
        console.log("Received Input is: roomBoardData with data column: " + roomBoardData)
        roomBoardChart(roomBoardData);
        break;
      case "Books":
        var booksData = data.map(function(d) {return d.Books});
        console.log("Received Input is: booksData with data column: " + booksData)
        booksChart(booksData);
        break;
      case "Personal":
        var personalData = data.map(function(d) {return d.Personal});
        console.log("Received Input is: personalData with data column: " + personalData)
        personalChart(personalData);
        break;
      case "PhD":
        var phdData = data.map(function(d) {return d.PhD});
        console.log("Received Input is: phdData with data column: " + phdData)
        phdChart(phdData);
        break;
      case "SF_Ratio":
        var sfData = data.map(function(d) {return d.SF_Ratio});
        console.log("Received Input is: sfData with data column: " + sfData)
        sfChart(sfData);
        break;
      case "perc_alumni":
        var percData = data.map(function(d) {return d.perc_alumni});
        console.log("Received Input is: percData with data column: " + percData)
        percChart(percData);
        break;
      default:
        var top10percData = data.map(function(d) {return d.Top10perc});
        console.log("Received Input is: top10percData with data column: " + top10percData)
        top10Chart(top10percData);
    }
  });
}

function gradRateChart(data){
  chartTitle("Distribution of Graduation Rate");
  var numOfBins = 12
  var xAxisTitle = "Graduation Rate";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,0,120,data,xAxisTitle, yAxisTitle,1);
  });
  updateOnSlider(12,0,120,data,xAxisTitle, yAxisTitle,1);
}

function top25Chart(data){
  console.log("In top25Chart Function");
  chartTitle("Distribution of % of new students from top 25% of High School class");
  var numOfBins = 6
  var xAxisTitle = "Percentage of new students from top 25% of High School class";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,1,110,data,xAxisTitle, yAxisTitle,2);
  });
  updateOnSlider(6,1,110,data,xAxisTitle, yAxisTitle,2);
}

function top10Chart(data){
  chartTitle("Distribution of % of new students from top 10% of High School class");
  var numOfBins = 10
  var xAxisTitle = "Percentage of new students from top 10% of High School class";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,1,100,data,xAxisTitle, yAxisTitle,3);
  });
  updateOnSlider(10,1,100,data,xAxisTitle, yAxisTitle,3);
}

function outstateChart(data){
  chartTitle("Distribution of Out-of-State Tuition Fee (in USD)");
  var numOfBins = 11
  var xAxisTitle = "Out-of-State Tuition Fee (in USD)";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,2000,22000,data,xAxisTitle, yAxisTitle,4);
  });
  updateOnSlider(11,2000,22000,data,xAxisTitle, yAxisTitle,4);
}

function roomBoardChart(data){
  chartTitle("Distribution of Room and Board costs (in USD)");
  var numOfBins = 15
  var xAxisTitle = "Room and Board Costs (in USD)";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,1500,8300,data,xAxisTitle, yAxisTitle,5);
  });
  updateOnSlider(15,1500,8300,data,xAxisTitle, yAxisTitle,5);
}

function booksChart(data){
  chartTitle("Distribution of Estimated Books Cost (in USD)");
  var numOfBins = 12
  var xAxisTitle = "Estimated Books Cost (in USD)";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,90,2400,data,xAxisTitle, yAxisTitle,6);
  });
  updateOnSlider(12,90,2400,data,xAxisTitle, yAxisTitle,6);
}

function personalChart(data){
  chartTitle("Distribution of Estimated Personal Spending (in USD)");
  var numOfBins = 14
  var xAxisTitle = "Estimated Personal Spending (in USD)";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,200,6900,data,xAxisTitle, yAxisTitle,7);
  });
  updateOnSlider(14,200,6900,data,xAxisTitle, yAxisTitle,7);
}

function phdChart(data){
  chartTitle("Distribution of % of faculty with PhD's");
  var numOfBins = 11
  var xAxisTitle = "Percentage of faculty with PhD's";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,0,110,data,xAxisTitle, yAxisTitle,8);
  });
  updateOnSlider(11,0,110,data,xAxisTitle, yAxisTitle,8);
}

function sfChart(data){
  chartTitle("Distribution of Student/Faculty Ratio");
  var numOfBins = 13
  var xAxisTitle = "Student/Faculty Ratio";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,2,40,data,xAxisTitle, yAxisTitle,9);
  });
  updateOnSlider(13,2,40,data,xAxisTitle, yAxisTitle,9);
}

function percChart(data){
  chartTitle("Distribution of % of Alumni who Donate");
  var numOfBins = 14
  var xAxisTitle = "Percentage of Alumni who Donate";
  var yAxisTitle = "Total Number of Universities"
  d3.select("#nBins").on("input", function() {
  updateOnSlider(+this.value,0,64,data,xAxisTitle, yAxisTitle,5);
  });
  updateOnSlider(14,0,64,data,xAxisTitle, yAxisTitle,5);
}

function updateOnSlider(nBins, minData,maxData,data,xAxisTitle,yAxisTitle,colorInd){
  d3.selectAll("g")
  .remove()
  .exit()

  // adjust the text on the range slider
  d3.select("#nBins-value").text(nBins);
  d3.select("#nBins").property("value", nBins);

  var binValueArray = Array(nBins).fill(0);
  console.log("binValueArray: " + binValueArray)
  var xAxis = Array.from(Array(nBins),(x, index) => index);

  var binSize = ((maxData - minData + 1)/nBins);
  var xAxis = Array.from(Array(nBins),(x, index) => minData + index*binSize);
  for(let i = 0; i < data.length; i++){
    let index =  Math.floor((data[i] - minData)/binSize);
    binValueArray[index]++;
  }
  console.log("Calculated binValueArray: " + binValueArray);

  var finalData = xAxis.map(function(e,i){
      return {key: xAxis[i], value: binValueArray[i]}
  });
  xScale.domain(Array.from(Array(nBins),(x, index) => minData + index*binSize));
  yScale.domain([0, d3.max(binValueArray)+10]); //TO-DO
  console.log("FinalData");
  console.log(finalData);
  axisForBar(finalData, xScale, yScale,xAxisTitle, yAxisTitle, colorInd);
}

function axisForBar(data, xScale, yScale,xAxisTitle, yAxisTitle, colorInd){
  if(barOrPie == 1){
    console.log("Previous Chart was Pie Chart. Now Entering Bar Chart");
    d3.selectAll("g")
    .remove()
    .exit()
    barOrPie = 0;
    d3.select("#tooltip")
        .style("opacity", 0);
  }
  var  g = svg.append("g")
           .attr("transform", "translate(" + 100 + "," + 100 + ")")
           .on("click",function(d){ barOrPie=1; return pieChart(data, xScale, yScale,xAxisTitle, yAxisTitle, colorInd);});

  g.append("g") //X-Axis
   .attr("transform", "translate(0," + height + ")")
   .call(d3.axisBottom(xScale).tickFormat(function(d){
     if(Math.floor(d) == d){
       return d;
    }
    else{
      return +d3.format('0.2f')(d);
    }
  }))
   .append("text")
   .attr("y", height - 260)
   .attr("x", width/2)
   .attr("font-size", "15px")
   .attr("opacity", 1)
   .attr("text-anchor", "middle")
   .attr("stroke", "black")
   .text(xAxisTitle);

  g.append("g") //Y-Axis
   .call(d3.axisLeft(yScale).tickFormat(function(d){
     if(Math.floor(d) == d)
       return d;
    else{
      return +d3.format('0.2f')(d);
    }
   })
   .ticks(10))
   .append("text")
   .attr("transform", "rotate(-90)")
   .attr("x", -150)
   .attr("y", 10)
   .attr("font-size", "15px")
   .attr("opacity", 1)
   .attr("dy", "-5.1em")
   .attr("text-anchor", "middle")
   .attr("stroke", "black")
   .text(yAxisTitle);

   g.selectAll(".bar") //Rectangular Bars
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .on("mouseover", function(d) { /*Ref: http://bl.ocks.org/phil-pedruco/9032348*/
      d3.select(this).attr('class', 'highlight');
      d3.select(this)
        .transition()
        .duration(400)
        .attr('width', xScale.bandwidth() + 5)
        .attr("y", function(d) { return yScale(d.value) - 10; })
        .attr("height", function(d) { return height - yScale(d.value) + 10; });

      g.append("text")
       .attr('class', 'val')
       .attr('x', function() {
           return xScale(d.key)+10;
       })
       .attr('y', function() {
           return yScale(d.value)-10;
       })
       .attr('text-anchor','middle')
       .text(function() {
           return [+d.value];  // Value of the text
       });

    })
    .on("mouseout", onMouseOut)
    .attr("x", function(d) { return xScale(d.key); })
    .attr("y", function(d) { return yScale(d.value); })
    .attr("width", xScale.bandwidth())
   .attr("fill", colors[colorInd])
   .transition()
   .ease(d3.easeLinear)
   .duration(400)
   .delay(function (d, i) {
       return i * 50;
   })
   .attr("height", function(d) { return height - yScale(d.value); });
}

//mouseout event handler function
function onMouseOut(d, i) {
    d3.select(this).attr('class', 'bar');
    d3.select(this)
      .transition()
      .duration(400)
      .attr('width', xScale.bandwidth())
      .attr("y", function(d) { return yScale(d.value); })
      .attr("height", function(d) { return height - yScale(d.value); });

    d3.selectAll('.val')
      .remove()
}

/*Pie-Chart Plotting*/
function pieChart(data, xScale, yScale,xAxisTitle, yAxisTitle, colorInd){
  console.log("In pie function")
  console.log("Data: " + data)
  d3.selectAll("g")
  .remove()
  .exit()

   //Defines Radius`
  var path = d3.arc()
      .outerRadius(radius)
      .innerRadius(0);

   //Defines Position for Labels
  var label = d3.arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);

  var pie = d3.pie()
             .sort(null)
             .value(function(d) { return d.value; });

  var g = svg.append("g")
        .attr("transform", "translate(" + (width+400) / 2 + "," + (height+200) / 2 + ")")
        .on("click", function(d){axisForBar(data, xScale, yScale,xAxisTitle, yAxisTitle, colorInd)});

  var arc = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

  arc.append("path")
     .attr("d", path)
     .attr("fill",function(d) {  return pieColor(d.data.key); })
     .on("mouseover", function(d) {return pieMouseOver(d.data)})
     .on("mouseout", function () {
      d3.select("#tooltip")
         .style("opacity", 0);
      });

arc.append("text")
  .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
  .attr("dy", "0.35em")
  .attr("font-size", "15px")
  .text(function(d) {
    return +d3.format('0.1f')(d.data.key);
  });
}

function pieMouseOver(data){
  console.log("In mouseHover Function")
  d3.select("#tooltip")
        .style("left", d3.event.pageX + "px")
        .style("top", d3.event.pageY + "px")
        .style("opacity", 1)
        .select("#value")
        .text(data.value);
}

if(firstTime==1){
  firstTime = 0;
  updateVariable("Top25perc");
}
