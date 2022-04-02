import React, { useEffect } from 'react'
import Content from '../content/Content'
import Paragraph from '../paragraph/Paragraph'
import Title from '../title/Title'
import classes from './aboutMe.module.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutMe = () => {
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
    <section className={classes.aboutMe}>
      <Content>
        <div data-aos="fade-up">
          <Title>ჩემს შესახებ</Title>
          <Paragraph>
            2021 წელს, როდესაც ყველანი იზოლაციაში ვიყავით, გადავწყვიტე
            პროგრამირების შესწავლა (იმ დროისთვის აქტუალური თემა იყო და მინდოდა
            ამ სფეროში ბედი მეც მეცადა) გავეცანი სხვადასხვა მიმართულებას და
            ავირჩიე ის, რომელიც ყველაზე ახლოს იყო ჩემს ინტერესებთან (ვიზუალურ
            მხარეზე მუშაობა) მას შემდეგ შევისწავლი ტექნოლოგიებს FRONT- END
            დეველოპმენტის მიმართულებით, ასევე, ვერკვევი UI/UX დიზაინის
            პრინციპებში.
            <br />
            <br />
            ვიყენებ პროგრამირების ენებისა და პროექტის ორგანიზების Best
            practices. მუდმივად ვეცნობი ტექნოლოგიურ სიახლეებსა და იმ ენების &
            ბიბლიოთეკების უახლეს ვერსებს, რომლებიც ამ სფეროში ფართოდ
            გამოიყენება.
          </Paragraph>
        </div>
      </Content>
    </section>
  )
}

export default AboutMe
