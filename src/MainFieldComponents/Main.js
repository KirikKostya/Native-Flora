import React, { useEffect, useState } from 'react'
import {FLOWERS} from '../DATA/FLOWERS.js'
import '../StylesForMainField/Main.css'
import axios from 'axios';

export default function Main() {
  const url = 'https://thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink'
  let SearchInput;
  
  const [inputValue, setInputValue] = useState('');
  const [newArray, setNewArray] = useState(FLOWERS);
  const [isEmpty, setIsEmpty] = useState(false);
  
  useEffect(()=>{
    SearchInput = document.querySelector('#Search');
    // axios.get(url).then(res => console.log(res.data))
  },[])

  const Search = () => {
    
    setTimeout(()=>{
      if(inputValue === ''){
        setNewArray(FLOWERS)
        setIsEmpty(false)
      } else {
      
      if(newArray.filter(flower=>flower.Name.toLowerCase().includes(inputValue)).length == 0){
        setIsEmpty(true)
      } else {
        setNewArray(newArray.filter(flower=>flower.Name.toLowerCase().includes(inputValue)))
      }

    }
   
  }, 200)
    
    
  }
  
  return (
    <div className='ContainerForMain'>
        <div className='UpSider'>
          
            <img className='Logo' src={require('../PHOTOS/NativeFloraLOGO.png')}/>
            
            <div className='SearchField'>
                <input id='Search' 
                       className='SearchInput' 
                       onChange={event=>{
                                          event.preventDefault()
                                          setInputValue(event.target.value);
                                          Search()
                                        }} 
                       placeholder='Search'
                       value={inputValue}/>
                <div onClick={()=>{
                                    setInputValue('');
                                    setNewArray(FLOWERS);
                                    setIsEmpty(false)
                                  }} 
                      className='ClearBTN'>&times;</div>
                <button className='SearchBTN' onClick={Search}>&#128269;</button>
            </div>

            <div className='MyAccount'>
              <svg width="50" height="50" viewBox="0 0 16 16"> 
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> 
                <path fill-rule="evenodd" d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z'/> 
              </svg>
            </div>
        </div>

        <div className='CardField'>
          {
            (isEmpty) 
             ? <p>Unfortunately, there are no flowers with such a name.</p>
              : <ul className='CardList'>
                  {
                    newArray.map(flower=>(
                      <div key={flower.id} className = 'Card'>
                        <img src={flower.img} className = 'IMG'/>
                        <p className='FlowerName'>{flower.Name}</p>
                      </div>
                    ))
                  }
                </ul>
          }
        </div>

    </div>
  )
}
