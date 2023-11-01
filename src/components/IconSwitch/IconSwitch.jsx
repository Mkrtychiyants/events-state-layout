import React from 'react'

export const IconSwitch = (props) => {
  const {icon, onSwitch} = props;
  return (
    <>
    <span className="material-icons view-switch" onClick={onSwitch}>{icon}</span>
    </>
  )
}
