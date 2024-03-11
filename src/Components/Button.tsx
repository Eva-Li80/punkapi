import React from 'react'

type ButtonProps = {
  name: string
  onClick: () => void;
  className: string, 
}

const Button = ({name, onClick, className}: ButtonProps) => {
  return (
    <div>
      <button className={className} onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button
