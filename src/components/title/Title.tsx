import React from 'react'
import classes from './title.module.scss'

type propsType = {
  children: string | React.ReactNode
}

const Title = ({ children }: propsType) => {
  return <h1 className={classes.title}>{children}</h1>
}

export default Title
