import React from 'react'
import Content from '../content/Content'
import Title from '../title/Title'
import classes from './Footer.module.scss'
import { MdMail, MdPhone, MdFacebook } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import Logo from '../logo/Logo'

const Footer = () => {
  return (
    <footer id="footer" className={classes.footer}>
      <Content>
        <div className={classes.contactInfo}>
          <Title>საკონტაქტო ინფორმაცია</Title>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:giokuprashvili115@gmail.com"
              >
                <MdMail className={classes.icon} />
                <p>giokuprashvili115@gmail.com</p>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="tel:555-32-73-82">
                <MdPhone className={classes.icon} />
                <p>555 32 73 82</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100004282518671"
              >
                <MdFacebook className={classes.icon} />
                <p>Giorgi Kuprashvili</p>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/gio-kuprashvili-55618a22a/"
              >
                <AiFillLinkedin className={classes.icon} />
                <p>Gio Kuprashvili</p>
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.footerDown}>
          <Logo />
          <p>©2022 / All Rights Reserved</p>
        </div>
      </Content>
    </footer>
  )
}

export default Footer
