import React from 'react'
import BackButton from './BackButton.js'
import '../PreviewStyles/OurServices.css'

const ListOfOurServices = [
  {
    id: 0,
    tittle: 'Convenient use',
    text: 'First of all, we try to make the site more autonomous and easy to use.'
  },
  {
    id: 1,
    tittle: 'Actual information',
    text: 'We try to make the most up-to-date information about the flowers that are here.'
  },
  {
    id: 2,
    tittle: 'Set up to work with clients',
    text: 'We are interested in what our client wants, the most important thing for us is a satisfied client.'
  },
  
]

export default function OurServices() {
  return (
    <div className='ContainerForOurServices'>
      <BackButton />
      <h1 className='h1'>Our Services</h1>
      <ul>
        {
          ListOfOurServices.map(service=>(
            <div className='Service' key={service.id}>
              <h1>{service.tittle}</h1>
              <p>{service.text}</p>
            </div>
          ))
        }
      </ul>
    </div>
  )
}
