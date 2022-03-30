import React from 'react'
import Content from '../content/Content'
import Title from '../title/Title'
import classes from './projects.module.scss'

import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'
import img5 from '../../assets/images/5.jpg'
import UnderlinedLink from '../UnderlinedLink/UnderlinedLink'
import Paragraph from '../paragraph/Paragraph'

let projects = [
  {
    name: 'OMDB.GE',
    img: img5,
    technologies: [
      'React',
      'React-router',
      'React-query',
      'TypeScript',
      'SCSS',
    ],
    link: 'https://george-kuprashvili-omdb.netlify.app',
  },
  {
    name: 'Viramein',
    img: img1,
    technologies: ['React', 'React-router', 'TypeScript', 'SCSS'],
    link: 'https://george-kuprashvili-viramein.netlify.app/',
  },
  {
    name: 'SCUL.PT',
    img: img2,
    technologies: ['React', 'SCSS'],
    link: 'https://george-kuprashvili-sculpt.netlify.app/',
  },
  {
    name: 'GummyRoll',
    img: img3,
    technologies: ['React', 'TypeScript', 'SCSS'],
    link: 'https://george-kuprashvili-gummyroll.netlify.app/',
  },
  {
    name: 'V&V coffee',
    img: img4,
    technologies: ['React', 'TypeScript', 'SCSS'],
    link: 'https://georgekuprashvili-vv-coffee.netlify.app',
  },
]

const Projects = () => {
  return (
    <section id="projects" className={classes.section}>
      <Content>
        <Title>პერსონალური პროექტები</Title>
        <div className={classes.cardsContainer}>
          {projects.map((project, index) => {
            return (
              <div className={classes.card} key={index}>
                <a
                  className={classes.linkWrapper}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className={classes.textContainer}>
                    <h3 className={classes.title}>{project.name}</h3>
                    <div className={classes.technologies}>
                      {project.technologies?.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <img src={project.img} alt="" />
                </a>
              </div>
            )
          })}
          <a
            target="_blank"
            rel="noreferrer"
            className={classes.seeAllProject}
            href="https://github.com/GiorgiKuprashvili7"
          >
            <p className={classes.title}>ყველა პროექტის ნახვა</p>
            <Paragraph>
              ყველა პროექტი სერვერზე ატვირთული არაა, ყველაფრის დეტალურად
              სანახავად ეწვიე ჩემს Github ექაუნთს
            </Paragraph>
          </a>
        </div>
      </Content>
    </section>
  )
}

export default Projects
