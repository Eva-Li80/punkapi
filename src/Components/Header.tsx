import React from 'react'

type HeaderProps = {
    title: string
}

const Header = ({title}: HeaderProps) => {
  return (
    <div className='header'>
      <h1 className='title'>{title}</h1>
    </div>
  )
}

export default Header
