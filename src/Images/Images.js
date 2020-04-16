import React, { Component } from 'react'
import { Consumer } from '../Context'
import Spinner from '../Components/Spinner'
import Image from "./Image";
export class Images extends Component {
    render(props) {
        return (
           <Consumer>
               {value=>{
                   console.log(value)
                   const {Photo,Heading} = value
                   
                   if (Photo.length===0 || Photo.length===undefined || Photo===null||Heading ===0){
   return  <Spinner/>
                   }else{
                       return(

                           <React.Fragment>
                                   <h4 className='mx-0 mt-2 text-center px-1'>{Heading}</h4>
                               <div className='row '>
                                {Photo.map(items=>(<Image key={items.id} Images={items.largeImageURL} Imager={items.likes} Person={items.userImageURL} Tags={items.tags}/>))}
                               </div>
                           </React.Fragment>
                       )

                   }
            
                
               }}
           </Consumer>
        )
    }
}

export default Images
