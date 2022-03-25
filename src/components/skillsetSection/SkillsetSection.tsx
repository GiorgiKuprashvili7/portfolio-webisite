import React from 'react'
import Content from '../content/Content'
import Title from '../title/Title'
import classes from './skillsetSection.module.scss'

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
  return (
    <section id="skillset" className={classes.section}>
      <Content>
        <Title>skillset</Title>
        <div className={classes.skillsList}>
          {skills.map((skill, index) => {
            return (
              <p className={classes.skill} key={index}>
                {skill}
              </p>
            )
          })}
        </div>
      </Content>
    </section>
  )
}

export default SkillsetSection
