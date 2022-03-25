import React from 'react'
import language1 from '../../assets/svg/Vector-1.svg'
import language2 from '../../assets/svg/Vector-2.svg'
import language3 from '../../assets/svg/Vector-3.svg'
import language4 from '../../assets/svg/Vector-4.svg'
import language5 from '../../assets/svg/Vector-5.svg'
import language6 from '../../assets/svg/Vector-6.svg'
import language7 from '../../assets/svg/Vector-7.svg'
import language8 from '../../assets/svg/Vector.svg'
import classes from './languagesDecor.module.scss'

const LanguegesDecor = () => {
  return (
    <div className={classes.decorContainer}>
      <img src={language3} alt="" />
      <img src={language4} alt="" />
      <img src={language5} alt="" />
      <img src={language6} alt="" />
      <img src={language7} alt="" />
      <img src={language8} alt="" />
      <img src={language1} alt="" />
      <img src={language2} alt="" />
    </div>
  )
}

export default LanguegesDecor
