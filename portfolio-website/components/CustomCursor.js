import React, { useRef, useEffect } from "react";

const FollowingBlob = () => {
  const ref = useRef(null);

  useEffect(() => {
    const blob = ref.current;

    document.body.onpointermove = (event) => {
      const { clientX, clientY } = event;

      blob.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <div className="cursorContainer">
      <div className="Blob" ref={ref}></div>
    </div>
  );
};

export default FollowingBlob;
