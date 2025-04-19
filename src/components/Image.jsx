import React from "react";

const Image = ({
  src,
  alt = "Image",
  width = "100%",
  height = "auto",
  caption = "",
  style = {},
}) => {
  if (!src) {
    return <p>Error: No image source provided.</p>;
  }

  return (
    <figure style={{ textAlign: "center", margin: "1rem 0" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width,
          height,
          borderRadius: "8px",
          boxShadow: "0 0 8px rgba(0,0,0,0.1)",
          ...style,
        }}
      />
      {caption && (
        <figcaption
          style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#666" }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;
