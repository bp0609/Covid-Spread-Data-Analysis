import React from "react";
import "../styles/BlogStyles.css";

const Iframe = ({
  path,
  width = "100%",
  height = "600px",
  title = "Embedded Plot",
}) => {
  if (!path) {
    return <p>Error: No path provided to the iframe.</p>;
  }

  return (
    <div className="enhanced-iframe">
      <iframe
        src={path}
        title={title}
        style={{
          width,
          height,
        }}
        loading="lazy"
      />
    </div>
  );
};

export default Iframe;
