import React from 'react'

const Alert = (props) => {
  const capitalized = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role='alert'
        >
          <strong>{capitalized(props.alert.type)}</strong>:{props.alert.msg}
        </div>
      </div>
    )
  )
}

export default Alert
