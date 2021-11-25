import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { DelCategory } from './components/DelCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    //const handleAdd = () =>{

    //    setCategories(cats=> [...cats, 'HunterXHunter']);
  
    //}

    return (
      <>
       <h1>Gif Expert App</h1>
       <h2>Buscar</h2>
       <DelCategory setCategories = {setCategories}/>
       <AddCategory setCategories = {setCategories}/>
       <ol>

          {

            categories.map( category => (

              <GifGrid 
              key = {category}
              category = {category}
              />

            ))
          }

       </ol>
       <hr/> 
      </>
    )
}