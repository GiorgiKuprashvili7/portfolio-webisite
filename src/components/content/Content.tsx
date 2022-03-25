import React from 'react'
import classes from './content.module.scss'

const Content = ({ children }: any) => {
  return <section className={classes.content_width}>{children}</section>
}

export default Content
