import React from 'react'

const Result = ({width,height,length,measure,meter,lt0m,ht0m,wt0m,cmt0m,mt0cm,ft}) => {
  return (
    <div class="col-md-4 result">
    <div class="card ">
    <div class="card-body">
    <h5 class="text-center py-3"> RESULT</h5>
    <div class="result-div"> <span id="length_val"> {length} </span> * <span id="width-val">{width}</span> * <span id="height-val">{height}</span> <span id="unit_val">{measure}</span> = <span id="result_in_m" class="fw-bold">{mt0cm}</span> <span class="fw-bold">m<sup>3</sup></span> = <span id="result_in_f" class="fw-bold">{ft}</span> <span class="fw-bold"> ft<sup>3</sup></span> </div>
    <div class="py-3">
    <div class="pre-formula">
    <span id="for-length"> {length} </span> <span class="for-unit">cm</span> = <span id="l_m">{lt0m}</span> m,
    <span id="for-width">{width} </span> <span class="for-unit">cm </span> = <span id="w_m">{wt0m}</span> m,
    <span id="for-height">{height} </span> <span class="for-unit">cm </span> = <span id="h_m">{ht0m}</span> m,
    </div>
    <div class="formula-div">
    <span id="lf-m">{lt0m}</span> * <span id="wf-m">{wt0m}</span> * <span id="hf-m">{ht0m}</span> = <span id="ans_in_m" class="fw-bold">{cmt0m}</span> <span class="fw-bold">m<sup>3</sup></span>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Result