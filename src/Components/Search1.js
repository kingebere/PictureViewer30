import React, { Component } from 'react'
import axios from "axios";
import {Consumer} from "../Context";
export class Search1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             views:''
        }
    }
    onChange=(e)=>{
        this.setState({
            views:e.target.value
        })
    }

    onSubmit=(dispatch,e)=>{
        e.preventDefault()
        axios
          .get(`https://cors-anywhere.herokuapp.com/http://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=${this.state.views}&image_type=photo`)
          .then(res =>{
              console.log(res.data)
              dispatch({
                  type:'Search_Results',
                  payload:res.data.hits
              })
              this.setState({
                  views: " " })
          } )
          .catch(err => console.error(err));
        
        
        
    }
    
    render() {
        return (
            <Consumer>
            {value=>{
                const { dispatch} = value
           return (
            <form onSubmit={this.onSubmit.bind(this,dispatch)}>
            <div className='form-group'>
            <div className="card-body mb-4  p-4text-center ">
    <h5 className="card-title display-4">YummyViews</h5>
    <p className="card-text text-center lead h7">Devour Your Eyes with Beauty of Nature's Finest Picks</p>
                <input type='text' className="form-control form-control-lg mb-3" placeholder='Search here..' onChange={this.onChange
                } value={this.state.view}></input>
                <button className='btn btn-primary btn-lg btn-block' type='submit'>Search</button>
            </div>
            </div>
            </form>
           )
            }}
            
            </Consumer>
        )
    }
}

export default Search1
