import React, { useState } from "react";
import "../styles/BlogStyles.css";

const Image = ({
  src,
  alt = "Image",
  width = "100%",
  height = "auto",
  caption = "",
  style = {},
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (!src) {
    return <p>Error: No image source provided.</p>;
  }

  return (
    <div className="enhanced-image">
      <figure>
        <img
          src={src}
          alt={alt}
          style={{
            width,
            height,
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.5s ease",
            ...style,
          }}
          onLoad={() => setIsLoaded(true)}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </div>
  );
};

export default Image;
