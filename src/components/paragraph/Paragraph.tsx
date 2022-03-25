import React from 'react'
import classes from './paragraph.module.scss'

type propsType = {
  children: string | React.ReactNode
}

const Paragraph = ({ children }: propsType) => {
  return <p className={classes.paragraph}>{children}</p>
}

export default Paragraph
