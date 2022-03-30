import React, { useRef } from 'react'
import Content from '../content/Content'
import Title from '../title/Title'
import classes from './Footer.module.scss'
import { MdMail, MdPhone, MdFacebook } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import Logo from '../logo/Logo'
import emailjs from '@emailjs/browser'

const Footer = () => {
  const form = useRef<HTMLFormElement>(null!)

  const sendEmail = (e: React.BaseSyntheticEvent) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_h1912f9',
        'template_t81181f',
        form.current,
        'FSC3jeJxkrXzM7IYV'
      )
      .then(
        (result) => {
          alert('შეტყობინება წარმატებით გაიგზავნა')
        },
        (error) => {
          alert('შეტყობინების გაგზავნა ვერ მოხერხდა, თხოვთ სცადეთ თავიდან')
        }
      )
    e.target.reset()
  }

  return (
    <footer id="footer" className={classes.footer}>
      <Content>
        <Title>საკონტაქტო ინფორმაცია</Title>
        <div className={classes.contactInfo}>
          <form ref={form} onSubmit={sendEmail}>
            <label>სახელი</label>
            <input required type="text" name="name" />
            <label>ელ.ფოსტა</label>
            <input required type="email" name="email" />
            <label>სათაური</label>
            <input required type="text" name="subject" />
            <label>შეტყობინება</label>
            <textarea required name="message" />
            <button type="submit">შეტყობინების გაგზავნა</button>
          </form>

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
