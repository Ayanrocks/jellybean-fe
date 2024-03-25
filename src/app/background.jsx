//Background.js
import { useState, useRef, useEffect } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import * as THREE from 'three';

export default function Background({ width, height, children }) {
  const [vantaEffect, setVantaEffect] = useState(0);

  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          THREE,
          el: vantaRef.current,
          mouseControls: 'true',
          touchControls: 'true',
          gyroControls: 'false',
          minHeight: height,
          minWidth: width,
          highlightColor: 0x003566,
          midtoneColor: 0x001d3d,
          lowlightColor: 0x003566,
          baseColor: 0x000814,
          blurFactor: 0.75,
          speed: 4.5,
          zoom: 1.8,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef}>{children}</div>;
}
