import React from 'react'

const Form = () => {
  return (

<div class="container py-5 my-4">
<div class="row justify-content-center">
<div class="col-lg-8">
<div class="card">
<div class="card-body">
<div class="calculation-div mx-auto ">
<input type="text" class="form-control me-2 d-inline-block input" placeholder="Length" id="length"/>
<input type="text" class="form-control mx-2  d-inline-block input" placeholder="Width" id="width"/>
<input type="text" class="form-control  ms-2 d-inline-block input" placeholder="Height" id="height"/>
<select name="unit" id="unit" class=" me-2 form-control d-inline-block">
<option value="cm">cm</option>
<option value="mm">mm</option>
<option value="m">m</option>
<option value="in">in</option>
<option value="ft">ft</option>
<option value="yd">yd</option>
</select>=
<input type="text" placeholder="?" class=" mx-2 form-control input d-inline-block" id="ans" readonly style={{backgroundColor: "white"}}/> Cubic Meter
</div>

</div>
</div>
</div>
</div>
<div class="col-md-4 result">
<div class="card ">
<div class="card-body">
<h5 class="text-center py-3"> RESULT</h5>
<div class="result-div"> <span id="length_val"></span> * <span id="width-val"></span> * <span id="height-val"></span> <span id="unit_val"></span> = <span id="result_in_m" class="fw-bold"></span> <span class="fw-bold">m<sup>3</sup></span> = <span id="result_in_f" class="fw-bold"></span> <span class="fw-bold"> ft<sup>3</sup></span> </div>
<div class="py-3">
<div class="pre-formula">
<span id="for-length"> </span> <span class="for-unit"> </span> = <span id="l_m"></span> m,
<span id="for-width"> </span> <span class="for-unit"> </span> = <span id="w_m"></span> m,
<span id="for-height"> </span> <span class="for-unit"> </span> = <span id="h_m"></span> m,
</div>
<div class="formula-div">
<span id="lf-m"></span> * <span id="wf-m"></span> * <span id="hf-m"></span> = <span id="ans_in_m" class="fw-bold"></span> <span class="fw-bold">m<sup>3</sup></span>
</div>
</div>
</div>
</div>
</div>
</div>

  )
}

export default Form