import React from 'react'

const Iframe = ({ path, width = '100%', height = '600px', title = 'Embedded Plot' }) => {
  if (!path) {
    return <p>Error: No path provided to the iframe.</p>
  }

  return (
    <iframe
      src={path}
      title={title}
      style={{
        width,
        height,
        border: 'none',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)',
        borderRadius: '8px',
      }}
      loading="lazy"
    />
  )
}

export default Iframe
