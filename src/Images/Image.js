import React, { Component } from 'react'

export class Image extends Component {
    render(prop) {
        const{Images,Tags,Imager,Person}=this.props
       console.log(Images)
        return (
           <React.Fragment>
               <div className='col-md-6'>
               <div className='card  mx-0 shadow-sm  mb-3'>
               <img className='card-img-top' src={Images}  alt="Publisher"></img>
               <div className='card-body'>
               <h5 className="card-title text-capitalize text-secondary h4">{Tags}
               <img className="img-thumbnail" src={Person} alt='Creator' style={{width:'42px',margin:'15px'}} ></img>
              <p className="card-text  h4">{Imager} Likes</p>
              <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
               </h5>
    
   

    
               </div>

               </div>

               </div>
           </React.Fragment>
        )
    }
}

export default Image
