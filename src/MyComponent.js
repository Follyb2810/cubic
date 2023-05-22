import React, { useEffect, useRef } from 'react';

const MyComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawcube = () => {
      const l2 = document.getElementById('length').value;
      const w2 = document.getElementById('width').value;
      const h2 = document.getElementById('height').value;
      let rate = 1;

      if (l2.indexOf('https://www.ursupplier.com/') !== -1) {
        // Fraction2Decimal implementation goes here
        // Fraction2Decimal(l2)
      }
      if (w2.indexOf('https://www.ursupplier.com/') !== -1) {
        // Fraction2Decimal implementation goes here
        // Fraction2Decimal(w2)
      }
      if (h2.indexOf('https://www.ursupplier.com/') !== -1) {
        // Fraction2Decimal implementation goes here
        // Fraction2Decimal(h2)
      }

      if (
        l2 !== '' &&
        w2 !== '' &&
        h2 !== '' &&
        !isNaN(l2) &&
        !isNaN(w2) &&
        !isNaN(h2)
      ) {
        rate = (canvas.height - dm_y) / h2;
        console.log(rate);
        w = w2 * rate;
        h = h2 * rate;

        if (w > canvas.width - dm_x) {
          rate = (canvas.width - dm_x) / w;
          w = canvas.width - dm_x;
          h = h * rate;
          console.log(
            `width : w=${w}, h=${h}, rate=${rate}, l2=${l2}, w2=${w2}, h2=${h2}`
          );
        }

        offset_x = (l2 / h2) * h * 0.35;
        offset_y = offset_x;

        if (offset_y + h > canvas.height - dm_y) {
          rate = (canvas.height - dm_y) / (offset_y + h);
          w = w * rate;
          h = h * rate;
          offset_x = offset_x * rate;
          offset_y = offset_x;
        }

        x = (canvas.width - w - offset_x) / 2;
        y = (canvas.height - h - offset_y) / 2 + offset_y;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = 'center';

      ctx.beginPath();
      ctx.lineWidth = '1';
      ctx.strokeStyle = '#003da2';
      ctx.rect(x, y, w, h);
      ctx.moveTo(x, y);
      ctx.lineTo(x + offset_x, y - offset_y);
      ctx.lineTo(x + w + offset_x, y - offset_y);
      ctx.lineTo(x + w + offset_x, y + h - offset_y);
      ctx.lineTo(x + w, y + h);
      ctx.moveTo(x + w, y);
      ctx.lineTo(x + w + offset_x, y - offset_y);
      ctx.stroke();
      //
      ctx.font = '15px Arial';
      ctx.fillStyle = '#000000';
      if (l2 > 0) {
        const txt = `${document.getElementById('length').value} ${document.getElementById('unit').value}`;
        ctx.fillText(
          txt,
          x + offset_x / 2 - ctx.measureText(txt).width / 2 - 4,
          y - offset_y / 2
        );
      }
      if (h2 > 0) {
        const txt = `${document.getElementById('height').value} ${document.getElementById('unit').value}`;
        ctx.fillText(
          txt,
          x - ctx.measureText(txt).width / 2 - 4,
          y + h / 2
        );
      }
      if (w2 > 0) {
        ctx.fillText(
          `${document.getElementById('width').value} ${document.getElementById('unit').value}`,
          x + w / 2,
          y + h + 14
        );
      }

      ctx.font = '15px Arial';
      ctx.fillStyle = '#008000';
      if (
        parseFloat(
          document.getElementById('l_m').textContent *
            document.getElementById('w_m').textContent *
            document.getElementById('h_m').textContent
        ) > 0
      ) {
        ctx.fillText(
          `${(
            parseFloat(
              document.getElementById('l_m').textContent *
                document.getElementById('w_m').textContent *
                document.getElementById('h_m').textContent
            ) || 0
          ).toFixed(1)} m³`,
          x + w / 2,
          y + h / 2
        );
      }
    };

    drawcube();

    document.getElementById('height').addEventListener('keyup', () => {
      const result = (
        parseFloat(
          document.getElementById('l_m').textContent *
            document.getElementById('w_m').textContent *
            document.getElementById('h_m').textContent
        ) || 0
      ).toFixed(1);

      if (document.getElementById('unit').value === 'm') {
        document.getElementById('ans').value = result;
        drawcube();
      } else {
        document.getElementById('ans').value = 0;
      }

      document.querySelector('.result').style.display = 'block';
      document.querySelector('.result-div').style.display = 'block';
      document.getElementById('length-val').textContent = document.getElementById('length').value;
      document.getElementById('width-val').textContent = document.getElementById('width').value;
      document.getElementById('height-val').textContent = document.getElementById('height').value;
      document.getElementById('unit_val').textContent = document.getElementById('unit').value;
      document.querySelector('.for-unit').textContent = document.getElementById('unit').value;
      document.getElementById('result_in_m').textContent = (
        parseFloat(
          document.getElementById('l_m').textContent *
            document.getElementById('w_m').textContent *
            document.getElementById('h_m').textContent
        ) || 0
      ).toFixed(1);

      if (document.getElementById('unit').value !== 'ft') {
        const result_in_f =
          document.getElementById('result_in_m').textContent * 3.28084;
        document.getElementById('result_in_f').textContent = result_in_f.toFixed(1);
      } else {
        document.getElementById('result_in_f').textContent = (
          parseFloat(
            document.getElementById('length').textContent *
              document.getElementById('width').textContent *
              document.getElementById('height').textContent
          ) || 0
        ).toFixed(1);
      }

      document.getElementById('for-height').textContent = document.getElementById('height').value;
      const h_m = document.getElementById('height').value * 0.01;
      document.getElementById('h_m').textContent = h_m;

      document.querySelector('.formula-div').style.display = 'block';
      document.getElementById('lf-m').textContent = document.getElementById('l_m').textContent;
      document.getElementById('wf-m').textContent = document.getElementById('w_m').textContent;
      document.getElementById('hf-m').textContent = document.getElementById('h_m').textContent;
      const l = parseFloat(document.getElementById('lf-m').textContent);
      const w = parseFloat(document.getElementById('wf-m').textContent);
      const h = parseFloat(document.getElementById('hf-m').textContent);
      document.getElementById('ans_in_m').textContent = (l * w * h).toFixed(5);

      document.getElementById('for-height').nextSibling.textContent = document.getElementById(
        'unit'
      ).value;

      drawcube();
      document.getElementById('unit').dispatchEvent(new Event('change'));
    });

    document.getElementById('length').addEventListener('keyup', () => {
      document.querySelector('.result').style.display = 'block';
      document.querySelector('.pre-formula').style.display = 'block';
      document.getElementById('for-length').textContent = document.getElementById('length').value;
      document.getElementById('for-length').nextSibling.textContent = document.getElementById(
        'unit'
      ).value;
      const l_m = document.getElementById('length').value * 0.01;
      document.getElementById('l_m').textContent = l_m;
      document.getElementById('unit').dispatchEvent(new Event('change'));
    });

    document.getElementById('width').addEventListener('keyup', () => {
      document.querySelector('.result').style.display = 'block';
      document.getElementById('for-width').textContent = document.getElementById('width').value;
      const w_m = document.getElementById('width').value * 0.01;
      document.getElementById('w_m').textContent = w_m;
      document.getElementById('unit').dispatchEvent(new Event('change'));
    });

    document.getElementById('unit').addEventListener('change', () => {
      const unit = document.getElementById('unit').value;
      switch (unit) {
        case 'm':
          change(1);
          drawcube();
          break;
        case 'cm':
          change(0.01);
          drawcube();
          break;
        case 'mm':
          change(0.001);
          drawcube();
          break;
        case 'in':
          change(0.0254);
          drawcube();
          break;
        case 'yd':
          change(0.9144);
          drawcube();
          break;
        case 'ft':
          change(0.3048);
          drawcube();
          break;
        default:
          document.getElementById('ans').value = 0;
          break;
      }
    });

    function change(meter) {
      document.getElementById('unit_val').textContent = document.getElementById('unit').value;
      document.querySelector('.for-unit').textContent = document.getElementById('unit').value;
      if (document.getElementById('unit').value === 'm') {
        document.querySelector('.pre-formula').style.display = 'none';
        document.querySelector('.formula-div').style.display = 'none';
      } else {
        document.querySelector('.pre-formula').style.display = 'block';
        document.querySelector('.formula-div').style.display = 'block';
      }
      const w_m = (document.getElementById('width').value * meter).toFixed(3);
      document.getElementById('w_m').textContent = w_m;
      document.getElementById('wf-m').textContent = w_m;
      const l_m = (document.getElementById('length').value * meter).toFixed(3);
      document.getElementById('l_m').textContent = l_m;
      document.getElementById('lf-m').textContent = l_m;
      const h_m = (document.getElementById('height').value * meter).toFixed(3);
      document.getElementById('h_m').textContent = h_m;
      document.getElementById('hf-m').textContent = h_m;
      document.getElementById('ans').value = (
        parseFloat(
          document.getElementById('l_m').textContent *
            document.getElementById('w_m').textContent *
            document.getElementById('h_m').textContent
        ) || 0
      ).toFixed(1);
      document.getElementById('result_in_m').textContent = (
        parseFloat(
          document.getElementById('l_m').textContent *
            document.getElementById('w_m').textContent *
            document.getElementById('h_m').textContent
        ) || 0
      ).toFixed(1);

      if (document.getElementById('unit').value !== 'ft') {
        const result_in_f =
          document.getElementById('result_in_m').textContent * 3.28084;
        document.getElementById('result_in_f').textContent = result_in_f.toFixed(1);
      } else {
        document.getElementById('result_in_f').textContent = (
          parseFloat(
            document.getElementById('length').textContent *
              document.getElementById('width').textContent *
              document.getElementById('height').textContent
          ) || 0
        ).toFixed(1);
      }

      document.getElementById('ans_in_m').textContent = (
        parseFloat(
          document.getElementById('l_m').textContent *
            document.getElementById('w_m').textContent *
            document.getElementById('h_m').textContent
        ) || 0
      ).toFixed(5);
    }
  }, []);

  return <canvas ref={canvasRef} />;
};

export default MyComponent;
