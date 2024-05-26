import React, { ReactNode, useState } from 'react'

interface Props{
    children : ReactNode;
    onSelect : () => void
}

export const Button = (Props: Props) => {
  return (
    <button type="button" onClick={Props.onSelect} className="btn btn-primary">{Props.children}</button>
  )
}
