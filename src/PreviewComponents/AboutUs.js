import React from 'react'
import BackButton from './BackButton.js'
import '../PreviewStyles/AboutUs.css'

const Cards = [
  {
    id: 0,
    header: 'How the project was created:',
    body: 'This project was originally conceived to promote floristry as a science. Our site is also part of a large resume of our master in the field of floristry. Our site contains 100+ flowers. Here you will be able to create your own bouquet of flowers of your preference.'
  }, 
  {
    id: 1,
    header: 'Who Created this project:', 
    body: 'Worked on the development of the site: Fomova Elizaveta Alexandrovna, a novice florist, decided to take up this science recently. Well, once decided - you need to do. She has compiled her own portfolio from many different flowers, most of which are in this project. The second, no less important component in the creation of this site is a novice Frontend developer - Kirik Konstantin Andreevich. Engaged in web development for 1.5 years.'
  },
  {
    id: 2,
    header: 'The purpose of our project:',
    body: 'Every site should have some purpose or some task. Our site is no exception.\n First of all it is convenience: every person, who knows our site and our company, can easily make his own bouquet and come to our store and pick up your order. \nThe second, no less important task is to promote Floristry as a science. We will try to maintain maximum contact with our customers, if you have any questions, you can \nCONTACT US.'
  }
]
export default function AboutUs() {
  return (
    <div className='ContainerForAboutUs'>
      <BackButton />
      <h1>About Us</h1>
        <ul>
          {
            Cards.map(card => (
              <div className='Card' key={card.id}>
                  <h1>{card.header}</h1>
                  <p>{card.body}</p>
              </div>
            ))
          }
        </ul>
    </div>
  )
}
