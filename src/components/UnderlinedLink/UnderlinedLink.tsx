import React from 'react'
import classes from './underlinedLink.module.scss'

type propsType = {
  children: string | React.ReactNode
  link: string
}

const UnderlinedLink = ({ children, link }: propsType) => {
  return (
    <a className={classes.link} href={link}>
      {children}
    </a>
  )
}

export default UnderlinedLink
