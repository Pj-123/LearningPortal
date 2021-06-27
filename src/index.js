import React from 'react';
import ReactDOM from 'react-dom';



let curDate=new Date();
curDate=curDate.getHours();
let greetings="";
const styleCss={};
if(curDate>1&&curDate<12){
  greetings="Good Morning";
  styleCss.color="yellow";
  
}
else if(curDate>=12&&curDate<=18)
{
greetings="good afternoon";
styleCss.color="orange";

}
else{
  greetings="good night";
  styleCss.color="blue";
  
}


ReactDOM.render(
  <h1>Hello Sir,<span style={styleCss}>{greetings}</span></h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

