import React from 'react'
import "./Button.css"
export const Button = ({title,link}) => {
  return (
    <a href={link} className="primary_button">{ title}</a>
  )
}
export default Button
