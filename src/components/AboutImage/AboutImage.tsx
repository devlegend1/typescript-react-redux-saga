// core
import React, { useEffect } from 'react';

// library
import { gsap } from 'gsap';

const AboutImage = () => {
  function aboutUsAnimation() {
    let idSVG = `#about-us-anim `;

    let empAnim1 = gsap.timeline({ defaults: { ease: 'sine.inOut' }, repeat: -1, repeatDelay: 1, delay: 0.5 });
    empAnim1
      .to(
        idSVG + '#emp1-right-hand',
        0.6,
        {
          rotate: -50,
          svgOrigin: '285.47px 326.88px',
          yoyo: true,
          repeat: 1,
        },
        0
      )
      .to(idSVG + '#emp1-left-hand', 0.6, { rotate: 50, svgOrigin: '384.71px 312.24px', yoyo: true, repeat: 1 }, 0)
      .to(idSVG + '#emp-apple-eyes', 0.6, { y: 5, yoyo: true, repeat: 1 }, 0)
      .to(idSVG + '#flow-elements > *', 1, { y: -120, stagger: 0.05, ease: 'sine.out' }, 0.6)
      .from(idSVG + '#flow-elements > *', 0.25, { opacity: 0, stagger: 0.05 }, 0.6)
      .to(idSVG + '#flow-elements > *', 0.25, { opacity: 0, stagger: 0.05 }, 1.1);

    let empAnim2 = gsap.timeline({
      defaults: { ease: 'sine.inOut' },
      repeat: -1,
      yoyo: true,
      repeatDelay: 0,
      delay: 0.5,
    });
    empAnim2
      .to(idSVG + '#emp2-right-hand', 0.5, { rotate: -20, svgOrigin: '142.59px 320.48px' }, 0)
      .to(idSVG + '#emp2-left-hand', 0.5, { rotate: 20, svgOrigin: '259.34px 320.48px' }, 0)
      .to(idSVG + '.earphones', 0.5, { y: -2 }, 0)
      .to(idSVG + '#em2p-eyes', 0.5, { y: -2 }, 0);

    let empAnim3 = gsap.timeline({ defaults: { ease: 'sine.inOut' }, repeat: -1, repeatDelay: 0.5, delay: 0.3 });
    empAnim3
      .to(idSVG + '#emp3-apple-eye', 0.5, { x: 5, repeat: 1, yoyo: true, repeatDelay: 1 }, 0)
      .to(idSVG + '#emp3-body', 0.5, { y: 3, repeat: 3, yoyo: true }, 0);
  }

  useEffect(() => {
    aboutUsAnimation();
  }, []);

  return (
    <svg id="about-us-anim" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464.28 436.02">
      <g id="emp3">
        <ellipse cx="72.03" cy="425.29" rx="51.18" ry="8.84" fill="#31a8a8" />
        <path
          d="M93.91,399a59.3,59.3,0,0,1,7.78,25.05h9.07"
          fill="none"
          stroke="#ff65a7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5.4"
        />
        <path
          d="M52.05,398c-4.51,8.82-8.95,15.92-9,25.13H34.59"
          fill="none"
          stroke="#ff65a7"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5.4"
        />
        <g id="emp3-body">
          <path
            id="emp3-right-hand"
            d="M45.41,364.39S12.5,348.94,4.33,366.73c-7,15.33,12.13,19.72,17.57,20.63a11.59,11.59,0,0,1,4.49,1.74c1.51,1,2.92,2.57,2.5,4.61-.73,3.52-2.3,4.74-6.33,4.19"
            fill="none"
            stroke="#ff65a7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.4"
          />
          <path
            id="emp3-left-hand"
            d="M92.33,360.62s32.92-15.45,41.08,2.33c7.05,15.33-12.12,19.72-17.57,20.64a11.3,11.3,0,0,0-4.52,1.74c-1.51,1-2.92,2.57-2.49,4.62.72,3.51,2.3,4.76,6.32,4.18"
            fill="none"
            stroke="#ff65a7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5.4"
          />
          <path
            d="M72.39,261.25c0,.91,2.35,20.51,2.35,20.51l25.78,29.06s5.83-14.08,10.9-16.22l-10.9-17.91Z"
            fill="#e84312"
          />
          <path
            d="M53.59,276c-27.31,5.08-43.26,38.58-24.94,60,3.22,3.25,11.9,10.9,9,13.45C-5.45,387.42,46.31,413,78,408.56c26.15-3.7,51.27-41.18,22.66-56.54-4.17-2.24-17.26-5.17-8.33-11.45C130.9,313.39,80.9,270.94,53.59,276Z"
            fill="#ff65a7"
          />
          <path
            d="M35.86,286S64,310.8,103.9,305"
            fill="none"
            stroke="#12122f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.53"
          />
          <path
            d="M72.14,303.56l14.34,2.27,14.3-.32c-2,6.58-5.16,15.2-12.51,17.23-3.56,1-7.63.8-10.75-1.35-3.57-2.43-4.37-6.12-4.94-10.17a37.07,37.07,0,0,1-.44-7.66Z"
            fill="#12122f"
          />
          <path
            d="M30.37,303s8.25-5.29,19.37-1"
            fill="none"
            stroke="#12122f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.53"
          />
          <path
            d="M59.44,355l-.72,4.16-2,11.69-.92,5.26c-.12.67-.46,1.51-.52,2.19a5.08,5.08,0,0,0,.86,2.22c.63,1.25,1.35,2.46,2.1,3.65s1.55,2.41,2.42,3.54a4,4,0,0,0,1.92,1.69c.86.22,1.36-.31,2-.84a25.07,25.07,0,0,0,3.31-3.67,49,49,0,0,0,2.88-4.12c.37-.6,1.35-1.78,1.21-2.55a17.39,17.39,0,0,0-.67-2.12l-1.42-5-3.23-11.38L65.21,355Z"
            fill="#96e2b9"
          />
          <path d="M59.45,355l-1.58-2.41,4.36-2,5.27,2.22L65.21,355Z" fill="#96e2b9" />
          <path
            d="M79.67,345.7l-2.15,11.24L62.1,350.47l-14,6.47-1.46-9.88a111.42,111.42,0,0,0,15.06.67A103,103,0,0,0,79.67,345.7Z"
            fill="#12122f"
            stroke="#12122f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.89"
          />
          <ellipse
            cx="99.4"
            cy="322.01"
            rx="4.76"
            ry="3.16"
            transform="translate(-58.27 24.16) rotate(-10.74)"
            fill="#96e2b9"
          />
          <ellipse
            cx="27.77"
            cy="322.03"
            rx="3.16"
            ry="4.76"
            transform="translate(-293.79 289.3) rotate(-79.26)"
            fill="#96e2b9"
          />
          <path
            d="M77.62,346.4s-9.4,1.91-15.48,1.84-13.4-.68-13.4-.68"
            fill="none"
            stroke="#12122f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.53"
          />
          <path
            d="M60,393.46a78.39,78.39,0,0,1-37.62-9.41c6,17.63,35.06,27.43,55.64,24.51,17.53-2.48,34.6-20.15,35.33-36.15C100.3,385.31,81.23,393.46,60,393.46Z"
            fill="#e84f98"
          />
          <path
            id="emp3-hair"
            d="M109.77,283.21a5.81,5.81,0,0,0-2.7.71,11.59,11.59,0,0,0-6.6-17.72,10.14,10.14,0,0,0,.07-1.23,11.7,11.7,0,0,0-18.62-9.46c-1.6-4.73-7.27-8.26-14-8.26-7.08,0-13,3.84-14.25,8.91a16.52,16.52,0,0,0-14.2-7.84c-9,0-16.41,7.06-16.41,15.73a15.38,15.38,0,0,0,.4,3.38,11.88,11.88,0,0,0,6.77,22.73c2.94,3.13,8,5.2,13.88,5.2,7.75,0,14.2-3.67,16-8.59A12.25,12.25,0,0,0,80.36,273a11.68,11.68,0,0,0,5.54,3.26,10.32,10.32,0,0,0-.06,1.11,11.6,11.6,0,0,0,18.69,9.19,5.8,5.8,0,1,0,5.26-3.38ZM74,268.18a15.29,15.29,0,0,0,3.2-1.56A11.73,11.73,0,0,0,79,271.4,12.09,12.09,0,0,0,74,268.18Z"
            fill="#e84312"
          />
          <g>
            <path
              d="M54,313.07s-5.66,8.44-12.65,8.44-12.66-8.41-12.66-8.41,5.67-8.42,12.66-8.42S54,313.07,54,313.07Z"
              fill="#fff"
            />
            <circle id="emp3-apple-eye" cx="41.3" cy="313.07" r="4.07" fill="#12122f" />
          </g>
        </g>
      </g>
      <g id="emp2">
        <path
          id="emp2-left-hand"
          d="M259.34,320.48s42.09-19.54,44-56.13"
          fill="none"
          stroke="#ffbf46"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="23"
        />
        <path
          id="emp2-right-hand"
          d="M142.59,320.48s-42.1-19.54-44-56.13"
          fill="none"
          stroke="#ffbf46"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="23"
        />
        <ellipse cx="207.45" cy="425.05" rx="61.91" ry="10.97" fill="#e84312" opacity="0.3" />
        <path
          className="earphones"
          d="M152.63,255c6.93.09,15.46-2.94,14.91,8.91s-1.85,29.62-4.63,36.09-12.58,9.51-16.83,5.06-10.85-11-10.85-23.61S147.33,254.9,152.63,255Z"
          fill="#abbbf9"
        />
        <path
          d="M152.31,295.33c-2.46,3.72-4.88,7.41-7.06,11.13-8.74,14.85-15.53,32.38-11.25,49.07,3.55,13.85,14.36,24.92,26.7,32.15,33.69,19.77,96.35,17.3,108.74-27.3,9-32.32-18.76-46.7-26.15-74.29-3.38-12.63-.22-26.68-5.47-38.65-7.22-16.48-29.71-22.79-45.95-15.07-13.63,6.47-25,16.63-28.77,30C159.85,273.76,159,285.24,152.31,295.33Z"
          fill="#ffbf46"
        />
        <path
          d="M225.11,424.07a2.86,2.86,0,0,1-2.44-1.36,72,72,0,0,1-10.25-30,2.87,2.87,0,1,1,5.69-.68.22.22,0,0,1,0,.08,66.22,66.22,0,0,0,8.56,26.18l6.79-.39a2.86,2.86,0,1,1,.41,5.71h-.08l-8.53.49Z"
          fill="#ffbf46"
        />
        <path
          d="M192.44,426h-9.87a2.87,2.87,0,0,1,0-5.73h7l.22-29.22a2.86,2.86,0,0,1,2.86-2.85h0a2.87,2.87,0,0,1,2.84,2.89l-.23,32.07A2.88,2.88,0,0,1,192.44,426Z"
          fill="#ffbf46"
        />
        <path
          className="earphones"
          d="M154.9,261.56s.52-58.43,47.1-58.43c41.7,0,49.75,48.84,49.48,63.33h-8.59S233.25,219,203.47,219s-38,25.15-40.69,44.46A22.35,22.35,0,0,1,154.9,261.56Z"
          fill="#abbbf9"
        />
        <path
          d="M198.27,399.49c-67.05-9.23-66.45-51.37-65.29-55.93,7.3-12.68,22.68-26.13,18.86-47.85l2.93-4.77s5.26,40.38,36.33,40.75c42.5.51,47.22-33.84,51.73-50.05,5.95,2,2.91,2.5,2.91,2.5s5.45,31.45,10.71,40.69a173.15,173.15,0,0,0,14.87,21.93s1.39,57.64-73,52.72Z"
          fill="#e84312"
        />
        <path
          d="M203.54,379.85c-29.36,0-59.56-10.06-69.37-30.8a4.47,4.47,0,0,1-.93-2.11c-.18-.46-.34-.92-.5-1.39-.51,9.63,4.31,45.51,65.53,53.94,67.6,4.46,72.66-42.66,73-51.36C263,369.9,233.76,379.85,203.54,379.85Z"
          fill="#da3f10"
        />
        <g>
          <path
            d="M185.58,340.39a4.05,4.05,0,0,0-1.69-3,5.18,5.18,0,0,0-3.38-1l-3.7.23h-.13l-.16,0-2.52.16a5.08,5.08,0,0,0-4.77,5.39l.15,2.47a5.09,5.09,0,0,0,5.07,4.77h.32l3.56-.22.12,0,2.84-.17a5.13,5.13,0,0,0,3.24-1.37,4.06,4.06,0,0,0,1.3-3.18Zm-2.64.93a5.19,5.19,0,0,0-.37-1.53,1.37,1.37,0,0,1,.32.76Zm-8.34,5.43a2.43,2.43,0,0,1-2.54-2.24l-.15-2.49a2.4,2.4,0,0,1,2.25-2.53l3.56-.22h.15a2.4,2.4,0,0,1,2.39,2.25l.15,2.48a2.4,2.4,0,0,1-2.25,2.53Zm8.32-1.32a5.18,5.18,0,0,0,.18-1.53l0,.76A1.31,1.31,0,0,1,182.92,345.43Z"
            fill="#12122f"
          />
          <path
            d="M200,335.92h-7.61A5.1,5.1,0,0,0,187.3,341v3.29a5.1,5.1,0,0,0,5.09,5.09h4.46c.12,0,.23,0,.34,0l.18,0H200a4.5,4.5,0,0,0,4.5-4.5v-4.46A4.51,4.51,0,0,0,200,335.92Zm-10,8.39V341a2.41,2.41,0,0,1,2.4-2.4h4.47a2.4,2.4,0,0,1,2.39,2.4v3.3a2.41,2.41,0,0,1-2.4,2.4h-4.46A2.41,2.41,0,0,1,190,344.31Z"
            fill="#12122f"
          />
          <path
            d="M219.62,336.84l-3.1-.27h-.09l-3.53-.32a5.08,5.08,0,0,0-5.53,4.6l-.23,2.47h0a5.08,5.08,0,0,0,4.6,5.53l3.55.33.47,0h0a1,1,0,0,0,.25.05l2.42.22a2.68,2.68,0,0,0,.4,0h0a4.25,4.25,0,0,0,4.24-3.88l.37-4.11A4.27,4.27,0,0,0,219.62,336.84Z"
            fill="#12122f"
          />
          <path
            d="M179.65,352.16h-6.77a5.08,5.08,0,0,0-5.08,5.09v2.48a5.1,5.1,0,0,0,5.08,5.09h3.57c.18,0,.34,0,.51-.05a2.38,2.38,0,0,0,.26.05h2.43a4.28,4.28,0,0,0,4.27-4.27v-4.13A4.27,4.27,0,0,0,179.65,352.16Z"
            fill="#12122f"
          />
          <path
            d="M200.16,352.17h-8.31a5.08,5.08,0,0,0-5.08,5.09v3.93a5.09,5.09,0,0,0,5.08,5.09H197l.22,0,.11,0h2.79a4.68,4.68,0,0,0,4.7-4.68v-4.73h0A4.7,4.7,0,0,0,200.16,352.17Zm-8.31,11.42a2.41,2.41,0,0,1-2.4-2.4v-3.94a2.4,2.4,0,0,1,2.4-2.4h5.31a2.4,2.4,0,0,1,2.28,2.39v3.94a2.41,2.41,0,0,1-2.4,2.4Z"
            fill="#12122f"
          />
          <path
            d="M181.38,368.48l-3.45-.12h0l-3-.11h0a5.06,5.06,0,0,0-5.21,4.91l-.1,2.64v0a5.08,5.08,0,0,0,4.91,5.23l3.57.12h.18l2.7.1h.17a4.66,4.66,0,0,0,3-1.11,4.18,4.18,0,0,0,1.5-3l.13-4.19A4.45,4.45,0,0,0,181.38,368.48Zm-9.1,7.42.09-2.64a2.4,2.4,0,0,1,2.4-2.31h.08l3,.1h0l.61,0a2.41,2.41,0,0,1,2.28,2.48l-.09,2.63a2.41,2.41,0,0,1-2.4,2.32h-.08l-3.57-.13A2.38,2.38,0,0,1,172.28,375.9Z"
            fill="#12122f"
          />
          <path
            d="M200.06,369.36h-6.77a5.1,5.1,0,0,0-5.09,5.09v2.48a5.1,5.1,0,0,0,5.09,5.09h3.57c.14,0,.26,0,.39,0a1.55,1.55,0,0,0,.37,0h2.44a4.28,4.28,0,0,0,4.27-4.27v-4.12A4.27,4.27,0,0,0,200.06,369.36Zm-6.77,10a2.41,2.41,0,0,1-2.4-2.4v-2.49a2.41,2.41,0,0,1,2.4-2.4h3.57a2.4,2.4,0,0,1,2.4,2.4v2.49a2.4,2.4,0,0,1-2.4,2.4Z"
            fill="#12122f"
          />
          <path
            d="M219.42,353.2l-3.11-.18h-.09l-3.56-.22h0a5.07,5.07,0,0,0-5.35,4.77l-1.16,19.37h0a5.08,5.08,0,0,0,4.77,5.38l3.56.22h.46a1.06,1.06,0,0,0,.31,0l2.42.15h.25a4.26,4.26,0,0,0,4.25-4l1.27-21A4.28,4.28,0,0,0,219.42,353.2ZM208.8,377.1,210,357.73a2.4,2.4,0,0,1,2.39-2.25h.14l3.57.22a2.39,2.39,0,0,1,2.25,2.53l-1.16,19.37v0a2.38,2.38,0,0,1-2.53,2.23l-3.57-.21A2.41,2.41,0,0,1,208.8,377.1Z"
            fill="#12122f"
          />
        </g>
        <path
          className="earphones"
          d="M253,251.8c-6.92.08-12.67-2.59-16.84,8.51-5.51,14.67,1.29,32.52,6.23,38.55,4.47,5.45,14,4.73,18.81.94,8.09-6.34,11-13.76,11-26.33S258.26,251.73,253,251.8Z"
          fill="#abbbf9"
        />
        <path
          d="M192,296.68a8.61,8.61,0,0,1-8.6-8.6,1.35,1.35,0,0,1,2.69,0,5.91,5.91,0,1,0,11.81,0,1.35,1.35,0,0,1,2.69-.14v.14A8.61,8.61,0,0,1,192,296.68Z"
          fill="#12122f"
        />
        <g id="em2p-eyes">
          <path d="M235.94,254.1H211.86a1.35,1.35,0,0,1,0-2.69h24.08a1.35,1.35,0,1,1,0,2.69Z" fill="#12122f" />
          <path d="M184.11,254.1H160a1.35,1.35,0,1,1,0-2.69h24.08a1.35,1.35,0,0,1,0,2.69Z" fill="#12122f" />
          <g>
            <path
              d="M193.34,273.17s11,17,24.69,17,24.68-17,24.68-17-11.05-17-24.68-17S193.34,273.17,193.34,273.17Z"
              fill="#fff"
            />
            <path
              d="M207.44,273.09a10.47,10.47,0,0,0,.2,2.3,2,2,0,0,0,1.93,1.68,2.23,2.23,0,0,0,1.58-1.2c.35-.6.56-1.27.93-1.85a4.19,4.19,0,0,1,5.81-1.08l0,0c1.19.91,1.76,2.39,2.62,3.61s2.36,2.31,3.76,1.78a2.91,2.91,0,0,0,1.66-2.6c.29-5.39-2.85-14.58-9.41-14.58C211.16,261.19,207.57,267.84,207.44,273.09Z"
              fill="#12122f"
            />
            <path
              d="M144,273.17s11.05,17,24.68,17,24.68-17,24.68-17-11.05-17-24.68-17S144,273.17,144,273.17Z"
              fill="#fff"
            />
            <path
              d="M158.08,273.09a9.89,9.89,0,0,0,.2,2.3,2,2,0,0,0,1.92,1.68,2.25,2.25,0,0,0,1.59-1.2c.35-.6.56-1.27.92-1.85a4.2,4.2,0,0,1,5.82-1.08l0,0c1.19.91,1.76,2.39,2.61,3.61s2.36,2.31,3.77,1.78a2.92,2.92,0,0,0,1.66-2.6c.28-5.39-2.86-14.58-9.41-14.58C161.79,261.19,158.2,267.84,158.08,273.09Z"
              fill="#12122f"
            />
          </g>
        </g>
        <g>
          <path d="M247.18,347.43l23.66,30.88-15.59.38-2.56,15.9L229,356.13Z" fill="#2852f0" />
          <path d="M227.51,347.43l-23.66,30.88,15.59.38,2.55,15.9,23.7-38.46Z" fill="#2852f0" />
          <path
            d="M238.5,323.87l3.7-1.2a3.75,3.75,0,0,1,4.19,1.36l2.28,3.15a3.77,3.77,0,0,0,1.88,1.36l3.7,1.2a3.75,3.75,0,0,1,2.58,3.56v3.89a3.74,3.74,0,0,0,.72,2.21l2.28,3.14a3.77,3.77,0,0,1,0,4.41l-2.29,3.14a3.72,3.72,0,0,0-.72,2.21v3.88a3.74,3.74,0,0,1-2.59,3.56l-3.7,1.2a3.72,3.72,0,0,0-1.87,1.37l-2.28,3.14a3.74,3.74,0,0,1-4.2,1.36l-3.7-1.2a3.8,3.8,0,0,0-2.31,0l-3.69,1.2a3.72,3.72,0,0,1-4.19-1.36L226,362.31a3.8,3.8,0,0,0-1.88-1.37l-3.7-1.2a3.75,3.75,0,0,1-2.59-3.56V352.3a3.73,3.73,0,0,0-.71-2.21L214.85,347a3.74,3.74,0,0,1,0-4.41l2.28-3.14a3.7,3.7,0,0,0,.71-2.2v-3.9a3.75,3.75,0,0,1,2.59-3.56l3.7-1.2a3.73,3.73,0,0,0,1.88-1.36l2.28-3.15a3.75,3.75,0,0,1,4.19-1.36l3.7,1.2A3.68,3.68,0,0,0,238.5,323.87Z"
            fill="#fff"
          />
          <path
            d="M238.22,329.06l2.77-.9a2.81,2.81,0,0,1,3.15,1l1.72,2.36a2.78,2.78,0,0,0,1.4,1l2.79.9a2.83,2.83,0,0,1,1.95,2.68v2.92a2.81,2.81,0,0,0,.54,1.66l1.71,2.36a2.81,2.81,0,0,1,0,3.31l-1.74,2.38a2.73,2.73,0,0,0-.53,1.65v2.92A2.82,2.82,0,0,1,250,356l-2.79.9a2.87,2.87,0,0,0-1.41,1l-1.68,2.38a2.79,2.79,0,0,1-3.15,1l-2.78-.9a2.9,2.9,0,0,0-1.75,0l-2.79.9a2.79,2.79,0,0,1-3.15-1l-1.71-2.36a2.78,2.78,0,0,0-1.41-1l-2.79-.9a2.81,2.81,0,0,1-1.94-2.68v-2.92a2.81,2.81,0,0,0-.54-1.66l-1.72-2.36a2.81,2.81,0,0,1,0-3.31l1.71-2.37a2.81,2.81,0,0,0,.54-1.66v-2.92a2.83,2.83,0,0,1,2-2.68l2.79-.9a2.81,2.81,0,0,0,1.41-1l1.71-2.36a2.81,2.81,0,0,1,3.15-1l2.79.9A2.76,2.76,0,0,0,238.22,329.06Z"
            fill="#fff"
            stroke="#2852f0"
            strokeMiterlimit="10"
            strokeWidth="7"
          />
          <path
            d="M237.34,335.66l2.95,6,6.6,1-4.77,4.65,1.12,6.56-5.9-3.1-5.9,3.1,1.13-6.56-4.77-4.66,6.59-.95Z"
            fill="#2852f0"
          />
        </g>
      </g>
      <g id="emp1">
        <ellipse cx="342.98" cy="422.43" rx="66.55" ry="11.83" fill="#85d3a6" />
        <g>
          <path
            d="M330.51,384s1.53,36.39,0,37.15-10.69-2.42-15,.13"
            fill="none"
            stroke="#c1b6fc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <path
            d="M363.08,384s1.53,36.39,0,37.15-10.69-2.42-15,.13"
            fill="none"
            stroke="#c1b6fc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
        <g>
          <path
            d="M375.17,276.36s-16.92-55.47-48-64.38c-2.16,26.46-8.65,60.82-29.52,77.49C342.09,291.38,375.17,276.36,375.17,276.36Z"
            fill="#3bbabc"
          />
          <path
            d="M361.94,252.19l-3.57,1.65-2.54-2.93.38,4-3.56,1.53,3.82.76.5,3.94,1.91-3.43,3.82.76L360,255.49Z"
            fill="#12122f"
          />
          <path
            d="M338.15,221l-3.69,2.55-3.69-2.8,1.27,4.45-3.69,2.55,4.58.13,1.27,4.45,1.53-4.33h4.58l-3.69-2.67Z"
            fill="#12122f"
          />
          <path
            d="M331.4,248.88l-3.94,2.67-3.69-2.8,1.4,4.45-3.82,2.68,4.58.12,1.4,4.46,1.53-4.46,4.7.13-3.81-2.8Z"
            fill="#12122f"
          />
          <path
            d="M349,241.24a9.6,9.6,0,0,1,1.65,1.53,7,7,0,0,0-8.75,4.75l0,.09A7.5,7.5,0,0,0,343,254a10.26,10.26,0,0,1-2-.89,7.19,7.19,0,0,1-1.9-9.93,7,7,0,0,1,9.73-2l.19.13Z"
            fill="#12122f"
          />
        </g>
        <path
          d="M347.31,259.56c-28.5-1.52-80.16,89.32-74.69,112.61,5.85,24.81,44.91,21.63,72.9,22.65,26.22,1,48.48,5.34,59-5.09C429,366.06,364.36,260.58,347.31,259.56Z"
          fill="#c1b6fc"
        />
        <path
          d="M404.44,367.46c-10.57,10.31-33,6-59,5.09-25.83-1-61.2,1.79-71-17.55-2,7.25-2.8,13.35-1.91,17.29,5.85,24.82,44.91,21.64,72.91,22.65,26.21,1,48.47,5.35,59-5.09,6-5.72,6.62-16.41,4.08-29A16.53,16.53,0,0,1,404.44,367.46Z"
          fill="#9f98e5"
        />
        <g id="emp1-left-hand">
          <path
            d="M384.71,312.24s25.2-1.4,33.85-32.95c6.49-23.67-12-46.19-15.52-42.37"
            fill="none"
            stroke="#c1b6fc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <line
            x1="404.44"
            y1="242.26"
            x2="410.16"
            y2="190.6"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
          <path
            d="M393.11,182.72l10.82,7.88-4.2,12.73,10.81-7.76,10.82,7.89-4.08-12.73,11-7.89H414.74L410.67,170l-4.2,12.73Z"
            fill="#3bbabc"
          />
        </g>
        <path
          id="emp1-right-hand"
          d="M285.47,326.88c-43.9-22.65-49.88-62.1-13.62-113.63"
          fill="none"
          stroke="#c1b6fc"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <g>
          <path d="M345.4,288.58s20.1-33.08,38.68.63C378.61,294.05,364,298.12,345.4,288.58Z" fill="#fff" />
          <path d="M298.06,291.12s14.76-31.17,39.19-5.47C333.18,293.54,315.11,300.54,298.06,291.12Z" fill="#fff" />
          <path
            d="M326.18,268.73s-12.85-6.62-19.85,7.5"
            fill="none"
            stroke="#12122f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M377.84,270.89s-6.36-13-20.36-5.85"
            fill="none"
            stroke="#12122f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <g id="emp-apple-eyes">
            <ellipse
              cx="364.6"
              cy="278.14"
              rx="5.34"
              ry="6.61"
              transform="translate(-36.71 56.23) rotate(-8.4)"
              fill="#12122f"
            />
            <ellipse
              cx="320.7"
              cy="279.29"
              rx="5.34"
              ry="6.61"
              transform="translate(-37.35 49.83) rotate(-8.4)"
              fill="#12122f"
            />
          </g>
        </g>
        <g id="emp1-mustesh">
          <path
            d="M399.6,333.88s-14-4.2-38.55-34c-7.51-9.16-20.23-2.29-18.45,7,.89,4.2,8.65,13.62,22.9,21C380.51,335.66,399.6,333.88,399.6,333.88Z"
            fill="#12122f"
            stroke="#12122f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.98"
          />
          <path
            d="M263,343.54s38-7.76,58.53-40.46c6.23-10.05,19.85-5,19.21,4.45-.25,4.33-6.87,14.64-20,23.8C306.72,341.13,263,343.54,263,343.54Z"
            fill="#12122f"
            stroke="#12122f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.98"
          />
        </g>
        <g id="flow-elements">
          <path
            d="M245.13,162.7a19,19,0,0,1,1.15,9.92c-.26,3.18-.89,6.1-1,9.16a9.53,9.53,0,0,0,.51,4.2,2.75,2.75,0,0,0,1.27,1.4,2.18,2.18,0,0,0,1.78.38,5,5,0,0,0,2.8-2.8,16,16,0,0,0,1.4-4.2,29.06,29.06,0,0,0,.26-8.78,15,15,0,0,0-1-4.06,7,7,0,0,0-.89-1.66,13.28,13.28,0,0,0-1.27-1.52,20,20,0,0,0-3.06-2.68,12.16,12.16,0,0,0-3.31-1.78,1.13,1.13,0,0,0-.63-.12c-.13,0-.26,0,.12-.13a1.55,1.55,0,0,0,.9-.89V159h0v.12a7.17,7.17,0,0,0,.25,1.66Zm-3.94,2c-.38-.76-.76-1.4-1.15-2.29a10.16,10.16,0,0,1-.89-2.8v-1.52c0-.22.08-.43.13-.64s.13-.51.38-.76.38-.51.51-.76a3,3,0,0,1,1.53-.9,5.21,5.21,0,0,1,2.42-.12,7,7,0,0,1,1.52.51,15,15,0,0,1,4.46,2.92,31.5,31.5,0,0,1,3.43,3.69,10,10,0,0,1,1.4,2.29,15.1,15.1,0,0,1,.89,2.55,16.22,16.22,0,0,1,.38,5,37,37,0,0,1-1.52,9.29,16.68,16.68,0,0,1-1.78,4.32,7.59,7.59,0,0,1-1.4,1.91,4.13,4.13,0,0,1-2.29,1.27,4.36,4.36,0,0,1-4.46-2.29,14.91,14.91,0,0,1-1.14-4.7c-.26-3.18-.13-6.24-.38-9.16a16.88,16.88,0,0,0-2-7.77Z"
            fill="#ff65a7"
          />
          <ellipse cx="452.62" cy="157.29" rx="3.35" ry="3.05" fill="#3bbabc" />
          <path
            d="M284.32,187.11a6.28,6.28,0,0,1,1.66-.39h.89a1.86,1.86,0,0,1,.76.26,4.8,4.8,0,0,1,2,1.52,17.6,17.6,0,0,1,1.78,3.31,16.48,16.48,0,0,0,3.31,5.35,21.31,21.31,0,0,1,3.94,5.6,7.1,7.1,0,0,1,.51,3.94,4.76,4.76,0,0,1-1,2.29,3.49,3.49,0,0,1-1,.89,3.69,3.69,0,0,1-1.27.51,3.48,3.48,0,0,1-2.29-.25,7.57,7.57,0,0,1-1.65-1,14.21,14.21,0,0,1-2.29-2.55,19.65,19.65,0,0,1-1.66-2.8c-.25-.51-.38-1-.63-1.52-.13-.26-.13-.51-.26-.77s-.12-.51-.25-.76c-.76-1.91-2.29-3.31-3.69-5.09a9,9,0,0,1-1.66-3.69,4.32,4.32,0,0,1,.51-3.05,5.28,5.28,0,0,1,1-1.28A3.87,3.87,0,0,0,284.32,187.11Zm2.17,4.58a.12.12,0,0,1-.13.12h0v-.12c0-.13-.13-.26-.13,0a5.2,5.2,0,0,0,.26,2.41,41,41,0,0,1,1.4,6.49v1.66a6.76,6.76,0,0,0,2.16,3.94,7.12,7.12,0,0,0,2.54,1.4,2.37,2.37,0,0,0,2-.25,1,1,0,0,0,.25-.51v-.64a6,6,0,0,0-.38-2.17,22.33,22.33,0,0,0-1.91-5.6,24.77,24.77,0,0,0-3.31-5.34,7.13,7.13,0,0,0-2.29-1.53c-.38-.13-.63-.13-.76,0s.26.14.26.14Z"
            fill="#ff65a7"
          />
          <ellipse cx="298.06" cy="187.81" rx="4.71" ry="3.82" fill="#3bbabc" />
          <path
            d="M234.19,119.92a4.48,4.48,0,0,1,1.53.76,2.82,2.82,0,0,1,.63.51c.13.26.38.39.51.64a4,4,0,0,1,.64,2.42,12.54,12.54,0,0,1-.64,3.69,17.25,17.25,0,0,0-.63,6.23A17.85,17.85,0,0,1,236,141a8.38,8.38,0,0,1-2,3.57,4,4,0,0,1-2.29,1.14h-1.4a2.49,2.49,0,0,1-1.28-.38,5.24,5.24,0,0,1-1.78-1.53,4.18,4.18,0,0,1-.63-1.78,10.14,10.14,0,0,1-.13-3.43,13.71,13.71,0,0,1,.38-3.19,7,7,0,0,1,.51-1.52l.38-.77c.13-.25.13-.5.26-.63.63-1.91.12-4,.25-6.24a10.48,10.48,0,0,1,.89-3.94,4.47,4.47,0,0,1,2.29-2,6.61,6.61,0,0,1,1.53-.25C233.3,119.67,233.68,119.79,234.19,119.92Zm-1,5c-.12,0-.12.13-.25,0h0s0-.25-.13-.12a5.53,5.53,0,0,0-1.27,2,36.2,36.2,0,0,1-2.8,6l-.51.64a2.25,2.25,0,0,1-.51.64,4.8,4.8,0,0,0-.64,1.4,6.18,6.18,0,0,0-.12,3.05,5.08,5.08,0,0,0,1.14,2.67,2,2,0,0,0,1.78,1,1,1,0,0,0,.51-.25,1.7,1.7,0,0,0,.38-.51,14,14,0,0,0,1-1.91,22.33,22.33,0,0,0,1.91-5.6,21.31,21.31,0,0,0,.64-6.36,6.85,6.85,0,0,0-.89-2.68c-.26-.25-.51-.5-.51-.38S233,124.88,233.17,124.88Z"
            fill="#ff65a7"
          />
          <ellipse cx="226.68" cy="128.29" rx="4.71" ry="3.82" fill="#3bbabc" />
          <path
            d="M450.5,127.31a6.18,6.18,0,0,1,3.43-.64,6.43,6.43,0,0,1,3.06,1.15,13.28,13.28,0,0,1,3.56,3.94,25.91,25.91,0,0,1,3.05,8.65,35.07,35.07,0,0,1,.64,8.91,30.59,30.59,0,0,1-1.66,8.78,16.35,16.35,0,0,1-2,3.94,25.25,25.25,0,0,1-2.93,3.44,20,20,0,0,0-4.83,6.49,4.23,4.23,0,0,0,.13,3.31c.51,1.14,1.27,2.16,2,3.69a8.26,8.26,0,0,1,.89,5.21,5.73,5.73,0,0,1-1.4,2.8,6.54,6.54,0,0,1-2.41,1.78,8.93,8.93,0,0,1-5.47.51,10.93,10.93,0,0,1-5-2.54,8.92,8.92,0,0,1-2.54-5,18.44,18.44,0,0,1-.13-2.68,15.88,15.88,0,0,0,.25-2.29,33.1,33.1,0,0,1,2.67-8.52c1.15-2.67,2.55-5.22,4-7.76.63-1.28,1.4-2.55,1.91-3.69a9.37,9.37,0,0,0,1-3.69,24.33,24.33,0,0,0-1.78-7.89c-.89-2.67-2.16-5.22-2.41-8.78A8.56,8.56,0,0,1,446,131,13.14,13.14,0,0,1,450.5,127.31Zm2.16,4.58a6.93,6.93,0,0,0-2.55,1.65,5,5,0,0,0-1,2.55c-.13,2.29.63,5.09,1.27,7.89a30,30,0,0,1,1,8.9,19.24,19.24,0,0,1-.89,4.58c-.51,1.4-1.15,2.68-1.66,4.08A52.54,52.54,0,0,0,444,177.31c0,.64-.13,1.4-.13,1.91a6,6,0,0,0,.13,1.53,4.44,4.44,0,0,0,1.27,2.55,5.76,5.76,0,0,0,5.47,1.4,2.23,2.23,0,0,0,1.65-1.53,5.08,5.08,0,0,0,.13-1.4,3.55,3.55,0,0,0-.38-1.66,36.17,36.17,0,0,1-1.53-4.07,5.63,5.63,0,0,1-.25-2.54,7.85,7.85,0,0,1,.76-2.42,15.77,15.77,0,0,1,2.8-3.69,36.86,36.86,0,0,1,3.31-2.93,10.32,10.32,0,0,0,2.54-3.18,14.92,14.92,0,0,0,1.4-3.81,30.41,30.41,0,0,0-1-16.16,24,24,0,0,0-3.44-7,7.41,7.41,0,0,0-2.29-2.17,2.33,2.33,0,0,0-.89-.25Z"
            fill="#ff65a7"
          />
          <ellipse cx="407.36" cy="145.75" rx="4.71" ry="3.82" fill="#3bbabc" />
          <path
            d="M360,112.19a9.5,9.5,0,0,1,4.2-.89,8.47,8.47,0,0,1,3.94,1.4,16.66,16.66,0,0,1,4.71,5.21,38.84,38.84,0,0,1,4.33,11.84A49.63,49.63,0,0,1,378.35,142a43.57,43.57,0,0,1-2,12.09,21.85,21.85,0,0,1-2.67,5.47,27.74,27.74,0,0,1-3.94,4.71c-1.4,1.4-2.8,2.8-4.07,4.32a17,17,0,0,0-2.93,4.84,6.65,6.65,0,0,0,0,5c.64,1.65,1.78,3.18,2.8,5.22a16.09,16.09,0,0,1,1.15,3.18,9.17,9.17,0,0,1,0,3.69,7.86,7.86,0,0,1-1.79,3.56,8.07,8.07,0,0,1-3.18,2.29,12.39,12.39,0,0,1-7.12.64,13.32,13.32,0,0,1-6.36-3.31,11.79,11.79,0,0,1-3.31-6.49,16.31,16.31,0,0,1-.13-3.56c.13-1.15.26-2,.38-3.18a55,55,0,0,1,3.57-11.84,109.43,109.43,0,0,1,5.34-10.94c.89-1.78,1.91-3.56,2.67-5.22a13,13,0,0,0,1.27-5.34,33.6,33.6,0,0,0-2.29-11.2c-.63-1.91-1.27-3.69-1.9-5.73a21.93,21.93,0,0,1-1.28-6.36,10.58,10.58,0,0,1,2-7A11.23,11.23,0,0,1,360,112.19Zm2.16,4.58a12.06,12.06,0,0,0-3.94,2.67,6.93,6.93,0,0,0-1.4,4.2c-.13,3.44,1.14,7.25,2.16,11.07a39.74,39.74,0,0,1,1.53,12.22,20.76,20.76,0,0,1-1.27,6.23c-.77,1.91-1.53,3.82-2.42,5.6a74.93,74.93,0,0,0-7,22.14,21.91,21.91,0,0,0-.26,2.8,16.29,16.29,0,0,0,.13,2.42,6.55,6.55,0,0,0,2,3.94,8.67,8.67,0,0,0,8.65,2,4.2,4.2,0,0,0,2.8-2.67,4.68,4.68,0,0,0,.13-2.29,8.31,8.31,0,0,0-.64-2.55c-.64-1.65-1.65-3.43-2.29-5.6a7.83,7.83,0,0,1-.38-3.43,10.83,10.83,0,0,1,.89-3.31,18,18,0,0,1,3.69-5.09c1.4-1.4,2.93-2.8,4.45-4.07,3.06-2.42,4.71-6.11,5.73-9.8a39.58,39.58,0,0,0,1-11.58,49.66,49.66,0,0,0-2-11.33,33.71,33.71,0,0,0-4.71-10.18,12.72,12.72,0,0,0-3.43-3.43,3.67,3.67,0,0,0-3.44,0Z"
            fill="#ff65a7"
          />
        </g>
      </g>
    </svg>
  );
};

export default AboutImage;
export { AboutImage };
