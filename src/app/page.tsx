'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import Background from './background.jsx';

export default function Home() {
  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js');
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <div className="section-home">
      <Background height="900" width="900">
        <div className="container mx-auto font-jost static w-full	h-screen">
          <div className="headings text-center block-center">
            <div className="columns-1 text-6xl font-light">
              <h1>
                Welcome to <span className="text-primary">JellyBean</span>
              </h1>
            </div>
            <div className="columns-1 text-2xl font-light">
              <h2>
                Your <span className="text-red-500">"</span>personalised<span className="text-red-500">"</span> Hospital
                Management system
              </h2>
            </div>
            <div className="heading-btn my-5">
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
}
