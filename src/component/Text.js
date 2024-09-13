import Reacte,{useState} from "react";



export default function Text(props) {
  const touppercase=()=>{
    let updatedtext=text.toUpperCase();
    newtext(updatedtext);
    props.alert("Text has been converted to Upper case letters","Sucess");
  }
  const tolowcase=()=>{
    let updatedtext=text.toLowerCase();
    newtext(updatedtext);
    props.alert("Text has been converted to Lower case letters","Sucess");
  }
  
  const [text,newtext]=useState("Hello");
  const onchanging=(evt)=>{
  
  newtext(evt.target.value);
  console.log(text);
  }
  return (
    <>
    <div>
    <div className="formmain" >
    
  <textarea className="form" value={text} onChange={onchanging} style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}} id="floatingTextarea" ></textarea>

</div>
<div className="btnupper">
<button className="btn btn-primary" onClick={touppercase}>Convert to Upper case </button>
<button className="btn btn-primary mx-3" onClick={tolowcase}>Convert to lower case </button>
</div>
</div>
<h2 className="sum"style={{color : props.mode==='dark'?'white':'black'}}>Summary :</h2>
<div className="summary">
 
  <p className="para"style={{color : props.mode==='dark'?'white':'black'}}>There are {text.split(" ").length} words and {text.length}charcters</p>
  <h3 style={{color : props.mode==='dark'?'white':'black'}}>Preview :</h3>
  <p className="para" style={{color : props.mode==='dark'?'white':'black'}}> {text}</p>
</div>

</>
  );
}
