import React, {useState, useEffect} from 'react'
import BackButton from './BackButton.js'
import '../PreviewStyles/Info.css'

export default function Info() {

  const [isOpen, setIsOpen] = useState('close')

  useEffect(()=>{
    const TUBME = document.querySelector('.TUBME');
    setInterval(()=>{
      TUBME.classList.remove('close')
    }, 5000)
  }, [])

  return (
    <div className='ConteinerForInfo'>
      <div className='LeftPartWithText'>
          <h1>INFORMATION</h1>

          <div className='Info'>
          This site was made to find information about the flower you need. 
          Here you can assemble your own bouquet in the constructor mode. 
          Our site has about 150 types of different flowers and information about them. 
          Each flower card contains the name of the plant, the year it was found, and when you click on the card, brief information about it will open.
          </div>

      </div>

      <div className='Animation'>
        
        <div className='Card' onClick={()=>setIsOpen('')}>
          <div className='TUBME close'>
            <p>TUB ME</p>
          </div>

          <div className='IMG'>
              <h2>Image</h2>
          </div>
          
          <h1>Flower name</h1>
        </div>

        <div className={`FlowerInfo ${isOpen}`} onClick={()=>setIsOpen('close')}>
          <h3>Information about flower</h3>
        </div>
      </div>

    </div>
  )
}
