import React, { useEffect } from 'react'
import Content from '../content/Content'
import Title from '../title/Title'
import classes from './skillsetSection.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const skills = [
  'HTML',
  'JavaScript ES6+',
  'CSS',
  'React',
  'React Router',
  'Axios',
  'Scss',
  'Redux toolkit',
  'React Query',
  'TypeScript',
  'React Testing Library',
  'jest',
  'React error boundary',
  'Git',
  'GitHub',
  'Formik',
  'YUP',
  'Redux',
  'Webpack',
  'Bootstrap 5',
  'Styled Components',
  'Parcel',
  'Babel',
  'ESlint',
  'Npm',
  'Json server',
  'Figma',
  'Adobe XD',
  'Adobe PS',
]

const SkillsetSection = () => {
  useEffect(() => {
    Aos.init({
      startEvent: 'DOMContentLoaded',
      mirror: false,
      delay: 50,
      offset: 150,
      duration: 400,
      once: true,
    })
  }, [])
  return (
    <section id="skillset" className={classes.section}>
      <div data-aos="fade-up">
        <Content>
          <Title>skillset</Title>
          <div className={classes.skillsList}>
            {skills.map((skill, index) => {
              return (
                <p
                  className={classes.skill}
                  key={index}
                  data-aos="fade-up"
                  data-aos-offset={`${index * 5}`}
                  data-aos-delay={`${index * 2}`}
                >
                  {skill}
                </p>
              )
            })}
          </div>
        </Content>
      </div>
    </section>
  )
}

export default SkillsetSection
