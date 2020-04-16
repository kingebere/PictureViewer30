import React, { Component } from 'react'
import axios from "axios";
const Context = React.createContext()
const reducer=(state, action)=> {
  switch (action.type) {
    case 'Search_Results':
      return {
        ...state,
        Photo:action.payload,
        Heading:'Search Results'
      };
     
    default:
      return state;
  }
}
export  class Provider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Photo:[],
             Heading:'Top 10 Beautiful Yellow Flowers',
             dispatch:action=>this.setState(state=>reducer(state,action))
        }
    }
    componentDidMount() {
        axios
          .get(`http://pixabay.com/api/?key=${process.env.REACT_APP_API_KEY}&q=yellow+flowers&image_type=photo`)
          .then(res =>{
                console.log(res.data)
              this.setState({
                Heading:'Top 10 Beautiful Yellow Flowers',
                  Photo:res.data.hits
              })
          } )
          .catch(err => console.error(err));
    }
    
    render() {
        console.log(this.state.Photo)
        console.log(this.state.Heading)
        return (
           
            <Context.Provider value={this.state}>
        {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer =Context.Consumer

export default Provider
