import React from 'react'

const Head = (props) => {
  return (
    <div style={{color:"var(--var-blue)",fontSize:"40px",background:"var(--var-color)",padding:"30px",fontWeight:"bold",textAlign:"center"}}>{props.children}</div>
  )
}

export default Head