import { Component, OnInit, ViewEncapsulation, Input, ElementRef } from '@angular/core';
import * as d3 from 'd3';
declare var jquery:any;
declare var $ :any;
import * as topojson from "topojson-client";

@Component({
  selector: 'sdrc-thematic-view',
  templateUrl: './thematic-view.component.html',
  styleUrls: ['./thematic-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ThematicViewComponent {
  root: any;
  constructor(element:ElementRef) { 
    let svgWidth = 500;
    let svgHeight = 500;
    let dataSetJson ={
		"map":{
				"baseGeoDataUrl":"assets/AssamMap.json",
        "scale":100,
        "center":[95,20.20],
				"keyDataName":"objects",
				"targetPropertyName":"properties.NAME1_",
			},
			"data":[
				{
				"name":"Bihar",
				"color":"red"
				},
				{
				"name":"Assam",
				"color":"green"
				}
			],
		};;
    let chartType = "geoMap";
    let el:HTMLElement = element.nativeElement;
    this.root = d3.select(el);
    let svgContainer = this.root.append("svg")
              .attr("width", svgWidth)
              .attr("height", svgHeight);
    switch (chartType) {
      case "geoMap":
       this.buildGeoMap(svgContainer, dataSetJson,svgWidth,svgHeight );
        break;
      default:
        ;
    }
  }
 private buildGeoMap(container: any, dataSetJson: any, width: number, height: number): void {
          let mapUrl = dataSetJson.map.baseGeoDataUrl;
          let center = dataSetJson.map.center;
          let targetProperty = "d."+dataSetJson.map.targetPropertyName;
          var centered;
  
                      
          let _findColorByName = (name:string):string => {
              for (let i in dataSetJson.data){
                  if (name ==dataSetJson.data[i].name){
                      let _color = dataSetJson.data[i].color;
                      return _color;
                  }
              }
              return null;
          }
      var path = d3.geoPath()
          .projection(
              d3.geoMercator()
              .scale(700)
              .translate([400, 300])
              .center(center)
              );
      
      var g = container.append("g");
      
      d3.json("assets/AssamMap.json",void function(error, mapData) {
        //if (error) throw error;
      
        g.append("g")
          .selectAll("path")
           .data(topojson.feature(mapData,mapData["objects"].layer1).features)
          .enter().append("path")
          .attr("d", path)
          .on("click", clicked)
          .on("mouseover", onover)
          .on("mouseout", onmouseout)
          .on("mousemove", onmousemove)
          .style("fill","gray")
          .style("fill",(d) => {
              let _targetArea = eval(targetProperty);
              if (_findColorByName(_targetArea)!= null){
                  return _findColorByName(_targetArea);
              } 
              return "hsl(80%,60%)";
          })
         
      });
      function onmousemove(d) {
          d3.select(".map_popover")
                  .style("display", "block")
                  .style("left", (d3.event.pageX) - 80 + "px")// TODO:
                  // make it dynamic so that position would be according to the text length
                  .style("top", (d3.event.pageY - 70) + "px")
                  .style("opacity", "1");
  
      };
      function onmouseout(d) {
          d3.select(".map_popover").style("display", "none");
      d3.selectAll(".activehover").classed("activehover", false);
      }
      function onover(d) {
          d3.selectAll(".activehover").classed("activehover",
                  false);
          var rank,datavalue;
          d3.select(".map_popover_content").html(
                  "<strong>Area Name:</strong> <span style='color:black'>"
                          + d.properties.NAME1_ + "</span>");
  
          if (d.properties.utdata && d.properties.utdata.rank) {
              rank = d.properties.utdata.rank;
              datavalue=d.properties.utdata.value;
          }else{
              rank = "Not Available";
              datavalue = "Not Available";
          }
          
      
          d3.select(".map_popover_close").html(
                  "<strong>Rank:</strong> <span style='color:black'>"
                  + rank + "</span>"
                  + "<br><strong>Value:</strong> <span style='color:black'>"
                          + datavalue + "</span>");
          
          d3.select(this.parentNode.appendChild(this))
                  .classed("activehover", true);
      }
      function clicked(d) {
          var x, y, k;
        
          if (d && centered !== d) {
            var centroid = path.centroid(d);
            x = centroid[0];
            y = centroid[1];
            k = 4;
            centered = d;
          } else {
            x = width / 2;
            y = height / 2;
            k = 1;
            centered = null;
          }
        
          g.selectAll("path")
              .classed("active", centered && function(d) { return d === centered; });
        
              g.transition()
              .duration(750)
              .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
              .style("stroke-width", 1.5 / k + "px");
        }
  
      }


}
