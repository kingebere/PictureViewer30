import React, { Component } from 'react'
import axios from "axios";
export class Search extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef()
       
    }
   

    handleSubmit=(e)=>{
        
alert(this.input.current.value)
e.preventDefault()
axios
.get(`http://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=yellow+flowers&image_type=photo`)
.then(res =>{
      console.log(res.data)
    this.setState({
      Heading:'Top 10 Beautiful Yellow Flowers',
        Photo:res.data.hits
    })
} )
.catch(err => console.error(err))
    }

    render(){
        
        return (
           <React.Fragment>
           <form onSubmit={this.handleSubmit}>
           
         <div className="form-group">
  
  <div className="card-body mb-4 text-center ">
    <h5 className="card-title display-4">YummyViews</h5>
    <p className="card-text text-center lead h7">Devour Your Eyes with Beauty of Nature's Finest Picks</p>
    <input type='text' className='form-control form-control-lg mb-3' placeholder='Discover Your Yummy Images..' ref={this.input}  />
    <button className="btn btn-primary btn-block btn-lg mb-3" type='submit' value='submit'>Get Images</button>
   
  </div>
  
  </div>

  </form>
           </React.Fragment>
        )
    }
}

export default Search
