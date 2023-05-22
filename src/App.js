import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import { useEffect, useState } from 'react';
import Result from './Result';
import Canva from './Canva';

function App() {
  const [length,setLength]=useState('')
  const [width,setWidth]=useState('')
  const [height,setHeight]=useState('')
  const [result,setResult]=useState(Number)
  const [measure,setMeasure]=useState('cm')
  const [meter,setMeter]=useState(0)
  const [lt0m,setlt0m]=useState(0)
  const [ht0m,setht0m]=useState(0)
  const [wt0m,setwt0m]=useState(0)
  const [cmt0m,setcmt0m]=useState(0)
  const [mt0cm,setmt0cm]=useState(0)
  const [ft,setFt]=useState(0)
  

   const handleLength=(e)=>{
       setLength(e.target.value)
   }
   const handleWidth=(e)=>{
       setWidth(e.target.value)

   }
   const handleHeight=(e)=>{
       setHeight(e.target.value)
      //  CalCube(length,width,e.target.value)
      //  cmtom()
   }
   const handleMeasure=(e)=>{
      setMeasure(e.target.value)
      // cmtom()
   }
  //  Therefore, the total surface area of the cube = 6a²

   const CalCube=(l,w,h)=>{
    let cube = parseFloat(l) * parseFloat(w) * parseFloat(h)
    // let cube = h+w+l
    setResult(cube)
   }
  //  ? centimeter to meter 
   const cmtom =()=>{
    // Divide the number of centimeters by 100
// Multiply the given centimeter value by 0.01 meters  
      // !length to m
      let l_m =parseInt(length) *0.01
      setlt0m(l_m.toFixed(3))
      let h_m =parseInt(height) *0.01
      setht0m(h_m.toFixed(3))
      let w_m =parseInt(width) *0.01
      setwt0m(w_m.toFixed(3))
      CalCube(l_m, h_m, w_m)
      let rm =result  
      setmt0cm(rm.toFixed(1))
     setcmt0m(rm.toFixed(5))
      let convertToFt= result * 3.28
      setFt(convertToFt.toFixed(1))
      
   }
  //  ? millimeter to meter 
   const mmtom =()=>{
    //? divide the length by 1000
      // !length to m
      let l_m =parseInt(length)/ 1000
           setlt0m(l_m.toFixed(3))
      let h_m =parseInt(height) / 1000
        setht0m(h_m.toFixed(3))
      let w_m =parseInt(width) / 1000
      setwt0m(w_m.toFixed(3))
      CalCube(l_m, h_m, w_m)
      let rm =result  
      setmt0cm(rm.toFixed(1))
     setcmt0m(rm.toFixed(5))
      let convertToFt= result * 3.28
      setFt(convertToFt.toFixed(1))
      
      
   }
   const mtom =()=>{
    //? divide the length by 1000
    // setmt0cm(result)
      // let convertToFt= result * 3.28
      // setFt(convertToFt.toFixed(1))
      let l_m =parseInt(length)
      setlt0m(l_m)
 let h_m =parseInt(height) 
   setht0m(h_m)
 let w_m =parseInt(width)
 setwt0m(w_m)
 CalCube(l_m, h_m, w_m)
 let rm =result  
 setmt0cm(rm.toFixed(1))
setcmt0m(rm.toFixed(1))
 let convertToFt= result * 3.28
 setFt(convertToFt.toFixed(1))
      
   }
   const mtoInch =()=>{
    //? factor of 1 inch = 0.0254  we need to multiply the length by 0.0254. inches = meters x 39.37
      // !length to m
      let l_m =parseInt(length)* 0.0254
           setlt0m(l_m.toFixed(3))
      let h_m =parseInt(height) * 0.0254
        setht0m(h_m.toFixed(3))
      let w_m =parseInt(width) * 0.0254
      setwt0m(w_m.toFixed(3))
       CalCube(l_m, h_m, w_m)
      let rm =result
      setmt0cm(rm.toFixed(1))
     setcmt0m(rm.toFixed(5))
    //  0.3048
    let convertToFt= rm * 3.28
        setFt(convertToFt.toFixed(1))


   }
   const mtoFt=()=>{
    // Multiply the given meter value by 3.28084 feet
    let l_m =parseInt(length)/ 3.28084
    setlt0m(l_m.toFixed(3))
let h_m =parseInt(height) / 3.28084
 setht0m(h_m.toFixed(3))
let w_m =parseInt(width) /3.28084
setwt0m(w_m.toFixed(3))
CalCube(l_m, h_m, w_m)
let rm =result
setmt0cm(rm.toFixed(1))
setcmt0m(rm.toFixed(5))
let convertToFt= length * height * width
// setFt(r)
setFt(convertToFt.toFixed(1))
   
   }
   const ytom=()=>{
    // Multiply the given yard value by 0.9144
    let l_m =parseInt(length) *  0.9144 
    setlt0m(l_m.toFixed(3))
let h_m =parseInt(height) * 0.9144
 setht0m(h_m.toFixed(3))
let w_m =parseInt(width) * 0.9144
setwt0m(w_m.toFixed(3))
CalCube(l_m, h_m, w_m)
let rm =result
setmt0cm(rm.toFixed(1))
setcmt0m(rm.toFixed(5))
let convertToFt=rm * 3.28084
setFt(convertToFt.toFixed(1))
   
   }

   useEffect(() => {
    CalCube(length, width, height);
        // mmtom();
        // cmtom();
    // mtom()
    // mtoInch()
    // mtoFt()
  },[length, width, height] );
  
  useEffect(() => {
    cmtom();
    switch(measure){
      case "cm":
        cmtom();
        // mmtom();
        break;
      case "mm":
      mmtom();
       break;
      case "m":
        mtom();
        break;
      case "in":
        mtoInch();
        break;
      case "ft":
        mtoFt();
        break;
      case "yd":
        ytom()
      break
        default:
          cmtom();
        }
  },);
  return (
    <div className="App">
    <h1>Calculation</h1>
    <div className="container ">
      <Canva size={200}
      length={length} width={width} 
      height={height}
      />
    <div className="d-flex  mx-auto ">
      <label className=''>length</label>
      <input type="number" className="form-control  text-primary" value={length} onChange={handleLength} placeholder="Length" />
      <label className=''>width</label>
        <input type="number" className="form-control " placeholder="Width" value={width} onChange={handleWidth} />
      <label className=''>height</label>
      <input type="number" className="form-control  " placeholder="Height" value={height} onChange={handleHeight}/>
      <select name="unit" id="unit" value={measure} className=" me-2 form-control d-inline-block" onChange={handleMeasure}>
      <option value="cm">cm</option>
      <option value="mm">mm</option>
      <option value="m">m</option>
      <option value="in">in</option>
      <option value="ft">ft</option>
      <option value="yd">yd</option>
</select>=
<input type="text" placeholder="?" className=" mx-2 form-control input d-inline-block" id="ans" value={mt0cm} readonly style={{backgroundColor: "white"}}/> Cubic Meter
    </div>
</div>

<div>
    {
      length && width && height &&  <Result length={length} width={width} 
      height={height} measure={measure}
       meter={meter} lt0m={lt0m}
        wt0m={wt0m} ht0m={ht0m} 
        cmt0m={cmt0m} mt0cm={mt0cm}
        ft={ft}
        />
    }
</div>
    </div>
  );
}

export default App;
