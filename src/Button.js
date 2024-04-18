import React from 'react'

function Button({title, onClickHandler, customStyles}) {
  return (
    <button style={customStyles} onClick={onClickHandler} >{title}</button>
  )
}

export {Button}
