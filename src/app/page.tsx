'use client';

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
            <div className="columns-1 text-7xl leading-relaxed font-light">
              <h1>
                Welcome to <span className="text-primary">JellyBean</span>
              </h1>
            </div>
            <div className="columns-1 text-2xl font-light leading-relaxed">
              <h2>
                Your <span className="text-red-500">"</span>personalised<span className="text-red-500">"</span> Hospital
                Management system
              </h2>
            </div>
            <div className="heading-btn my-5">
              <button className="btn btn-signup bg-primary py-1 w-48	rounded-full hover:bg-accent transition duration-300 ease-in-out hover:scale-125">
                <span className="text-sec-accent">
                  Get Started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 inline-block ml-1 mb-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
}
