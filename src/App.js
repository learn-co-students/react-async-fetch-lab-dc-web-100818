import React, {Component} from 'react'

class App extends Component {

  render() {
    return(
      <div>App</div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => console.log(data))
  }

}


export default App
