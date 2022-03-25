import React from 'react'
import Content from '../content/Content'
import Title from '../title/Title'
import classes from './heroSection.module.scss'
import HeroSvg from '../../assets/svg/hero.svg'
import UnderlinedLink from '../UnderlinedLink/UnderlinedLink'

const HeroSection = () => {
  return (
    <section id="home" className={classes.heroSection}>
      <h1 className={classes.decorText}>პორტფოლიო</h1>
      <Content>
        <div className={classes.flexContainer}>
          <div className={classes.textContainer}>
            <h2>front end developer</h2>
            <Title>
              გამარჯობა ! ჩემი სახელია გიორგი კუპრაშვილი და აქ შეგიძლია ნახო
              ჩემი
              <span> პროექტები</span> & <span>სკილსეტი</span>
            </Title>
            <UnderlinedLink link="#footer">
              საკონტაქტო ინფორმაცია
            </UnderlinedLink>
          </div>

          <img src={HeroSvg} alt="developer" />
        </div>
        <div className={classes.line}></div>
      </Content>
    </section>
  )
}

export default HeroSection
