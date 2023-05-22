import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Form from './Form';
import { useEffect, useState } from 'react';
import Result from './Result';

function App() {
  const [length,setLength]=useState('')
  const [width,setWidth]=useState('')
  const [height,setHeight]=useState('')
  const [result,setResult]=useState('')
  const [measure,setMeasure]=useState('cm')
  const [meter,setMeter]=useState(0)
  const [lt0m,setlt0m]=useState(0)
  const [ht0m,setht0m]=useState(0)
  const [wt0m,setwt0m]=useState(0)
  const [cmt0m,setcmt0m]=useState(0)
  const [mt0cm,setmt0cm]=useState(0)
  // !Formula: Length (in meter) X Width (in meter) X Height (in meter)
  // !Convert other units to meters first, then use the formula above
  // !If you have measurements in millimeters or centimeters, 
  // ? divide by 1000 or 100 respectively to convert to meters before using the formula
  // !If you have measurements in feet or inches, convert them to meters first by multiplying by 0.3048 (for feet) 
  // ?or 0.0254 (for inches), then use the formula above
  // !meter to centimeter
  // ?Multiply the given cubic centimeter value by 0.000001 cubic meters
  // ?Divide the volume in cubic centimeters by 1,000,000 to get the volume in cubic meters
  // ?For example, if you have a volume of 5000 cubic centimeters, you can either multiply it by 0.000001 to get 0.005
  // ? cubic meters or divide it by 1,000,000 to get 0.005 cubic meters.
  // To convert a measurement in cubic meters to cubic centimeters,
  //  multiply the volume by the conversion factor. For example, to convert 10 cubic meters to cubic centimeters,
  //  multiply 10 by 1,000,000, which equals 10,000,000 cm³.
  // !cubic meter
  // The formula for finding the volume of a box is length x width x height
  // For example, if you have a rectangular box with a length of 2 meters,
  //  a width of 1 meter, and a height of 3 meters, the volume would be 2 x 1 x 3 = 6 cubic meters

  // ! meter to ft
  // To​​ convert a measurement​​ in cubic meters​​ to cubic feet​​,
  //  multiply the​​ volume by the​​ conversion factor​​. For example​​,
  //  to convert​​ 10 cubic meters​​ to cubic feet​​, multiply 10 by​​ 35.3146667, which​​ equals 353.147 ft​​3

  // !cubic to yard
  // To convert a measurement in cubic meters to cubic yards,
  //  multiply the volume by the conversion factor. For example, 
  // to convert 10 cubic meters to cubic yards, multiply 10 by 1.307951, which equals 13.07951 yd³.
//  !cubic toinch
// To convert a measurement in cubic meters to cubic inches, multiply the volume by the conversion 
// factor. For example, to convert 10 cubic meters to cubic inches, multiply 10 by 61,023.7441, 
// which equals 610,237.441 in³.
// ! cubic to milimeter
// To convert a measurement in cubic meters to cubic millimeters, multiply the volume by the conversion factor.
//  For example, to convert 10 cubic meters to cubic millimeters, multiply 10 by 1,000,000,000, which equals 10,000,000,000 mm³.
   const handleLength=(e)=>{
       setLength(e.target.value)
      //  CalCube(e.target.value,width,height,)
      //  cmtom()
   }
   const handleWidth=(e)=>{
       setWidth(e.target.value)
      //  CalCube(length,e.target.value,height)
      //  cmtom()
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
      let m_m =result *  0.000001
      setcmt0m(m_m.toFixed(5))
      let rm =result /  1000000 
      setmt0cm(rm.toFixed(1))
      
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
      let m_m =result /1000000000
      setcmt0m(m_m.toFixed(5))
      let rm =result /  1000000000
      setmt0cm(rm.toFixed(1))
      
   }
   const mtom =()=>{
    //? divide the length by 1000
      // !length to m
      // let l_m =parseInt(length)/ 1000
      //      setlt0m(l_m.toFixed(3))
      // let h_m =parseInt(height) / 1000
      //   setht0m(h_m.toFixed(3))
      // let w_m =parseInt(width) / 1000
      // setwt0m(w_m.toFixed(3))
      // let m_m =result /1000000000
      // setcmt0m(m_m.toFixed(5))
      let rm =result
      setmt0cm(rm)
      
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
      // let m_m =parseInt(result)
      // setcmt0m(m_m.toFixed(2))
       CalCube(l_m, h_m, w_m)
      let rm =result
      setmt0cm(rm.toFixed(1))
     setcmt0m(rm.toFixed(5))
      
   }
   const cmtoFt=()=>{
    // Divide the number of centimeters by 30.48
    // Multiply the given centimeter value by 0.0328084 feet
    let m =parseInt(result) *0.01
    setMeter(m.toFixed(3))
   }
   useEffect(() => {
    CalCube(length, width, height);

    // cmtom();
    // mmtom();
    // mtom()
    mtoInch()
  }, [length, width, height,result]);
  
  useEffect(() => {
    // cmtom();
    // mmtom();
    // mtom()
    mtoInch()
  }, [measure]);
  return (
    <div className="App">
    <h1>Calculation</h1>
    <div className="container ">
    <div className="d-flex  mx-auto ">
      <label className=''>length</label>
<input type="number" className="form-control  text-primary" value={length} onChange={handleLength} placeholder="Length" />
      <label className=''>width</label>
<input type="number" className="form-control " placeholder="Width" value={width} onChange={handleWidth} />
      <label className=''>height</label>
<input type="number" className="form-control  " placeholder="Height" value={height} onChange={handleHeight}/>
<select name="unit" id="unit" className=" me-2 form-control d-inline-block" onClick={handleMeasure}>
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
  {result}
  <Result length={length} width={width} 
            height={height} measure={measure}
             meter={meter} lt0m={lt0m}
              wt0m={wt0m} ht0m={ht0m} 
              cmt0m={cmt0m} mt0cm={mt0cm} 
              />
</div>
    </div>
  );
}

export default App;
