import { useEffect, useRef, useState } from 'react';
import Quagga from 'quagga';

export const BarcodeScanner = () => {
  const scannerRef = useRef(null);
  const [barcode, setBarcode] = useState(null);

  useEffect(() => {
    console.log("en el useEffect");

    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: scannerRef.current
      },
      decoder: {
        readers : [{
            format: "ean_reader",
            config: {}
        }]
      },

    }, function (err) {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected((data) => {
      setBarcode(data.codeResult.code);
      console.log(data.codeResult.code);
      console.log(data);
    });

    return () => Quagga.stop();
  }, []);

  return <div>
    <div id="scanner" ref={scannerRef}></div>
    {barcode ? <p>Código de Barras Leído: {barcode}</p> : <p> No se ha leido Codigo</p>} {/* Muestra el código de barras leído */}
  </div>
};

