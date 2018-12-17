import React, {Component} from 'react'

class App extends Component{
   constructor() {
      super()
      this.state = {
         astros: []
      }
   }
   
   componentDidMount() {
      fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then((data) => this.setState({ astros: data.people}))
  
    }

   render() {
      return (
         <div>
            <h2>These people are currently in space:</h2>
            {this.state.astros.map(astro => <p>{astro.name}</p>)}
         </div>
      )
   }
}

export default App
