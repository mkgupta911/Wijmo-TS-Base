// Import stylesheets
import './style.css';

import "@grapecity/wijmo.styles/wijmo.css"

import * as wjGrid from "@grapecity/wijmo.grid"

new wjGrid.FlexGrid("#app",{
  itemsSource:getData()
})


function getData(){
  let countries ="US,UK,India,China,Japan,Italy".split(",");
  let data=[];
  for(let i=0;i<12;i++){
    data.push({
      id:i,
      country:countries[i%countries.length],
      sales:Math.random()*10000,
      expenses:Math.random()*1000,
      active:i%2==0
    });
    
  }
  return data;
}