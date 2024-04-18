import React from 'react'

function Button({title, onClickHandler}) {
  return (
    <button onClick={onClickHandler} >{title}</button>
  )
}

export {Button}
