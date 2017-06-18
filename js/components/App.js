import React from 'react'
import { render } from 'react-dom'
import FlickrSearch from './FlickrSearch'
import '../../css/normalize.css'
import '../../css/style.css'
import '../../img/loading.gif'
import '../../img/left.png'
import '../../img/right.png'
import '../../index.html'

class App extends React.Component {
  render () {
    return (
      <FlickrSearch />
    )
  }
}

render(<App />, document.getElementById('app'))
