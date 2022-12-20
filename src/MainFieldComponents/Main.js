import React, { useEffect, useState } from 'react'
import {FLOWERS} from '../DATA/FLOWERS.js'
import '../StylesForMainField/Main.css'

export default function Main() {
  let SearchInput;
  const [newArray, setNewArray] = useState(FLOWERS);
  
  useEffect(()=>{
    SearchInput = document.querySelector('#Search');
  },[])

  const Search = (event) => {
    event.preventDefault();
    let newArr = newArray.filter(el=>
      el.Name.toLowerCase().includes(SearchInput.value.toLowerCase())
    )
    // setNewArray(newArr)
    setTimeout(()=>{
      (SearchInput.value == '')
        ?setNewArray(FLOWERS)
          :setNewArray(newArr)
    }, 400)
  }
  
  return (
    <div className='ContainerForMain'>
        <div className='UpSider'>
          
            <img className='Logo' src={require('../PHOTOS/NativeFloraLOGO.png')}/>
            
            <div className='SearchField'>
                <input id='Search' className='SearchInput' onChange={Search} placeholder='Search' />
                <button className='SearchBTN' onClick={Search}>&#128269;</button>
            </div>

            <div className='MyAccount'>

            </div>
        </div>

        <div className='CardField'>
          <ul className='CardList'>
            {
              newArray.map(flower=>(
                <div key={flower.id} className = 'Card'>
                  <img src={flower.img} className = 'IMG'/>
                  <p className='FlowerName'>{flower.Name}</p>
                </div>
              ))
            }
          </ul>
        </div>
    </div>
  )
}
