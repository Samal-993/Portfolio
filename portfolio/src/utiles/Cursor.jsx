import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

function Cursor() {
  const cursorRef = useRef();

  useEffect(() => {
    // Initial position
    gsap.set(cursorRef.current, {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const CursorAnimation = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        ease: "elastic.out(1, 0.3)",
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", CursorAnimation);
    return () => window.removeEventListener("mousemove", CursorAnimation);
  }, []);

  return (
    <div
      ref={cursorRef}
      className='w-[20px] h-[20px] fixed top-0 left-0 bg-black block rounded-full z-50 pointer-events-none'
    ></div>
  );
}

export default Cursor;
