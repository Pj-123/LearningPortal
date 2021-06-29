import React from 'react';
import Back from "./background";
import Newlay from "./Newpage";






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

function App(){
return(
<>
  <h1>Hello Sir,<span style={styleCss}>{greetings}</span></h1>
  <Back></Back>
  <Newlay></Newlay>
 </>
);}
export default App;


