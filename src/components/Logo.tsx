import React from 'react';

const Logo = ({ className = "w-10 h-10", ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2Fff5de2a183594c85b44dfbc0860c4f96%2Fdb0260838d434ca992220d98ccf3bdad?format=webp&width=800&height=1200"
      alt="ConSpirito Logo"
      className={`object-contain ${className}`}
      {...props}
    />
  );
};

export default Logo;
