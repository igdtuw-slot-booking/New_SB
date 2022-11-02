import React from 'react'

function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export default function App() {
  return (
    <Box
      style={{
        backgroundColor: '#333',
        borderRadius: 4,
        color: '#eee',
        minHeight: 200,
        padding: 12,
        width: 300,
      }}
    >
      Sally Montgomery
    </Box>
  )
}