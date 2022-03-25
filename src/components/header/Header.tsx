import React from 'react'
import Content from '../content/Content'
import Logo from '../logo/Logo'
import classes from './header.module.scss'
import { MdFacebook } from 'react-icons/md'
import { IoLogoGithub } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import { CgClose } from 'react-icons/cg'
import { useState, useEffect } from 'react'

const Header = () => {
  const [navActive, setNavactive] = useState(false)
  const [open, setOpen] = useState(false)
  const [size, setSize] = useState<any>({
    width: undefined,
  })

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavactive(true)
    } else {
      setNavactive(false)
    }
  }

  const resizehandler = () => {
    setSize({
      width: window.innerWidth,
    })
  }

  const menuToggler = () => {
    setOpen((prev) => !prev)
  }
  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    window.addEventListener('resize', resizehandler)

    if (size.width > 900 && open) {
      setOpen(false)
    }
    return () => {
      window.removeEventListener('resize', resizehandler)
      window.removeEventListener('scroll', changeBackground)
    }
  }, [size.width, open])

  return (
    <header
      className={`${classes.header} ${navActive && classes.active_Header}`}
    >
      <Content>
        <div className={classes.innerHeader}>
          <Logo />

          <div
            onClick={menuToggler}
            className={`${classes.darkOverlay} ${
              open && classes.darkOverlay_active
            }`}
          ></div>

          <button className={classes.toggler} onClick={menuToggler}>
            {open ? (
              <CgClose className={classes.icon} />
            ) : (
              <AiOutlineMenu className={classes.icon} />
            )}
          </button>

          <nav className={`${classes.nav} ${open && classes.nav_active}`}>
            <ul className={classes.navigation}>
              <li>
                <a onClick={() => setOpen(false)} href="#home">
                  მავარი
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)} href="#skillset">
                  სკოლსეტი
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)} href="#projects">
                  პროექტები
                </a>
              </li>
            </ul>

            <ul className={classes.socials}>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/GiorgiKuprashvili7"
                >
                  <IoLogoGithub className={classes.icon} />
                  <p>Github</p>
                </a>
              </li>
              <li>
                <a
                  onClick={() => setOpen(false)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100004282518671"
                >
                  <MdFacebook className={classes.icon} />
                  <p>Facebook</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Content>
    </header>
  )
}

export default Header
