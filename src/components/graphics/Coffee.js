import React from "react";
export default function Coffee() {
  return (
    <svg
      width="224"
      height="224"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="32"
          y1="63"
          x2="32"
          y2="13"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d4d8e1" />
          <stop offset="1" stopColor="#f3f4f5" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="32"
          y1="48"
          x2="32"
          y2="22"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d1a788" />
          <stop offset="1" stopColor="#f2d3b8" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="32"
          y1="44"
          x2="32"
          y2="26"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6ab891" />
          <stop offset="1" stopColor="#85cba9" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-5"
          y1="13"
          y2="7"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-6"
          y1="7"
          y2="1"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <path
        className="cls-1"
        d="M53,13c-1.5,15-3.5,35-5,50H16c-2.51-25.13-3.6-36-5-50Z"
      />
      <path
        className="cls-2"
        d="M53.1,22,50.5,48h-37c-.58-5.79-1.9-19-2.6-26Z"
      />
      <polygon
        className="cls-3"
        points="50.8 45 50.5 48 13.5 48 13.2 45 50.8 45"
      />
      <polygon className="cls-4" points="48.3 60 48 63 16 63 15.7 60 48.3 60" />
      {/* <circle className="cls-5" cx="32" cy="35" r="9" />
      <circle className="cls-5" cx="32" cy="35" r="9" /> */}
      {/* <path className="cls-6" d="M32,44a9,9,0,0,1-8.94-10,9,9,0,0,0,17.88,0A9,9,0,0,1,32,44Z" /> */}
      <path
        className="cls-7"
        d="M13,7H51a4,4,0,0,1,4,4v2a0,0,0,0,1,0,0H9a0,0,0,0,1,0,0V11A4,4,0,0,1,13,7Z"
      />
      <polygon className="cls-8" points="50 7 14 7 16 1 48 1 50 7" />
      <polygon className="cls-9" points="53 13 52.7 16 11.3 16 11 13 53 13" />
      {/* <path className="cls-10" d="M32,45A10,10,0,1,0,22,35,10,10,0,0,0,32,45Zm0-18a8,8,0,1,1-8,8A8,8,0,0,1,32,27Z" /> */}
      <path
        className="cls-10"
        d="M51,6c-.4,0,0,.75-2-5.32A1,1,0,0,0,48,0H16a1,1,0,0,0-.95.68L13.28,6A5,5,0,0,0,8,11v2a1,1,0,0,0,1,1h1.09l.71,7a1,1,0,0,0-.9,1.08l2.6,26a1,1,0,0,0,1,.9c.14,0-.06-1.5,1.5,14.1a1,1,0,0,0,1,.9H48a1,1,0,0,0,1-.9L50.41,49a1,1,0,0,0,1.09-.9c2.83-28.32,2.77-26.3,2.34-26.77C53,20.44,53,23,53.91,14H55a1,1,0,0,0,1-1V11A5,5,0,0,0,51,6ZM16.72,2H47.28l1.33,4H15.39ZM47.1,62H16.9L15.61,49H48.39Zm2.5-15H14.4L12,23H52Zm1.6-26H12.8l-.7-7H51.9ZM54,12H10V11a3,3,0,0,1,3-3H51a3,3,0,0,1,3,3Z"
      />
      <style jsx>{`
        .cls-1 {
          fill: url(#linear-gradient);
        }
        .cls-2 {
          fill: url(#linear-gradient-2);
        }
        .cls-3 {
          fill: #cba07a;
        }
        .cls-4 {
          fill: #c7cdd8;
        }
        .cls-7 {
          fill: url(#linear-gradient-5);
        }
        .cls-8 {
          fill: url(#linear-gradient-6);
        }
        .cls-9 {
          fill: #dfe3ea;
        }
        .cls-10 {
          fill: currentColor;
        }
      `}</style>
    </svg>
  );
}
