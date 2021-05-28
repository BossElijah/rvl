import React from 'react';

const HamburgerSVG = () => (
  <svg
    enableBackground="new 0 0 64 64"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="25" fill="rgba(0, 0, 0, 0.3)"></circle>
    <g fill="#fafafa">
      <path
        className="circle"
        d="m32 58.5c-14.6 0-26.5-11.9-26.5-26.5s11.9-26.5 26.5-26.5 26.5 11.9 26.5 26.5-11.9 26.5-26.5 26.5zm0-50c-13 0-23.5 10.5-23.5 23.5s10.5 23.5 23.5 23.5 23.5-10.5 23.5-23.5-10.5-23.5-23.5-23.5z"
      ></path>
      <path d="m43.2 26h-22.4c-.9 0-1.5-.6-1.5-1.5s.6-1.5 1.5-1.5h22.5c.8 0 1.5.6 1.5 1.5s-.7 1.5-1.6 1.5z"></path>
      <path d="m43.2 33.5h-22.4c-.9 0-1.5-.7-1.5-1.5s.6-1.5 1.5-1.5h22.5c.8 0 1.5.6 1.5 1.5 0 .8-.7 1.5-1.6 1.5z"></path>
      <path d="m43.2 41h-22.4c-.9 0-1.5-.7-1.5-1.5s.6-1.5 1.5-1.5h22.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.6 1.5z"></path>
    </g>
  </svg>
);

export default HamburgerSVG;
