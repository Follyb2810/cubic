import React, { useRef, useEffect } from 'react';

function Canva({ size ,length,width,height}) {

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.strokeRect(0, 0, size, size);
  }, [size]);

  return ( 
  <div className="">
    <div>
        {length} {height}
        <canvas ref={canvasRef} width={size} height={size} />
    {width} 

    </div>
  </div>
  )
}

export default Canva;
