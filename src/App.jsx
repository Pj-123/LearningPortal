import React,{useState} from 'react';

const App=()=>{
    const newcolor="yellow";
    const [oldcolor,updatedcolor]=useState(newcolor);
    const [name,updatedname]=useState("pratik jha");
    const bgchange=()=>{
        console.log("clicked");
        let newbg="red";
        updatedcolor(newbg);
        let newname="web developer";
        updatedname(newname);
    }
    const bgdouble=()=>{
        updatedcolor("yellow");
        updatedname("pratik jha");


    }
    return (
        <>
        <div style={{backgroundColor:oldcolor}}>
            <button onClick={bgchange} onDoubleClick={bgdouble}>{name}</button>
        </div>

        </>
    )
}
export default App;