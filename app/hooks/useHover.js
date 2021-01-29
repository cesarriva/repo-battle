import React from 'react';

const userHover = () => {
  const [hovering, setHovering] = React.useState(false);

  const mouseOver = () => {
    setHovering(true);
  };

  const mouseOut = () => {
    setHovering(false);
  };

  return [
    hovering,
    {
      onMouseOver: mouseOver,
      onMouseOut: mouseOut
    }
  ];
};

export default userHover;
