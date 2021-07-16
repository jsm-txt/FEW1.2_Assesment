import React from 'react'
import './like.css';

class Likes extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        value: ""
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
    this.setState({value: event.target.value});
}

render(){
  return (
    <div id="like">
        <header id="header">Number of likes: </header> 
        <input id="input" type="number" value={this.state.value} onChange={this.handleChange} />
    </div>
  )
}
}
export default Likes
