import React, { useState } from "react";

export default () => {
  const startingPosition = {
    x: window.screen.width / 2,
    y: window.screen.height / 2
  };
  const [position, setPosition] = useState(startingPosition);

  return <div>hi</div>;
};
