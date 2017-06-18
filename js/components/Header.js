import React from 'react'
import { string, func } from 'prop-types'
import fetchJsonp from 'fetch-jsonp'
import { debounce, buildSearchUrl } from '../helpers'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.onTyping = this.onTyping.bind(this)
    this.onTypingCompleted = debounce(this.onTypingCompleted, 500)
    this.search = this.search.bind(this)
    this.state = {
      query: ''
    }
  }

  componentDidMount () {
    this.search(this.props.initialQuery)
  }

  onTyping (event) {
    const query = event.target.value

    if (query) {
      this.props.onQuerySent()
    }

    this.setState({ query })
    this.onTypingCompleted(query)
  }

  onTypingCompleted (searchQuery) {
    this.search(searchQuery)
  }

  search (searchQuery) {
    this.setState({ searchQuery })
    if (!searchQuery) {
      this.props.onResultsReceived(searchQuery, [])
    } else {
      try {
        const searchUrl = buildSearchUrl(searchQuery)
        fetchJsonp(searchUrl, {
          jsonpCallbackFunction: 'jsonFlickrApi'
        }).then((searchResults) => {
          return searchResults.json()
            .then((searchResultsJSON) => {
              this.props.onResultsReceived(searchQuery, searchResultsJSON.photos.photo)
            }).catch((error) => {
              console.log(error)
            })
        }).catch((error) => {
          console.log(error)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  render () {
    return (
      <div className='header'>
        <input className='search-box' onChange={this.onTyping} value={this.state.query} type='text' placeholder='Search ...' />
      </div>
    )
  }
}

Header.propTypes = {
  initialQuery: string,
  onQuerySent: func,
  onResultsReceived: func
}

export default Header
