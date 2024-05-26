import React, { ReactNode } from 'react'


interface Props{
    children : ReactNode
    ondelete : ()=> void
}
const Alert = (data: Props) => {
  return (
    <>
    <div className="alert alert-primary alert-dismissible">
        <div>{data.children}</div>
    <button type="button" onClick={data.ondelete} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    </>
  )
}

export default Alert