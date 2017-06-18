import React from 'react'
import { string } from 'prop-types'
import Header from './Header'
import Slideshow from './Slideshow'
import ChosenPhoto from './ChosenPhoto'

class FlickrSearch extends React.Component {
  constructor (props) {
    super(props)
    this.onQuerySent = this.onQuerySent.bind(this)
    this.onResultsReceived = this.onResultsReceived.bind(this)
    this.onNavigateLeft = this.onNavigateLeft.bind(this)
    this.onNavigateRight = this.onNavigateRight.bind(this)
    this.setPhoto = this.setPhoto.bind(this)
    this.getPhoto = this.getPhoto.bind(this)
    this.state = {
      searchQuery: this.props.initialQuery,
      photos: [],
      chosenPhotoIndex: 0,
      loading: false
    }
  }

  onQuerySent () {
    this.setState({ loading: true })
  }

  onResultsReceived (searchQuery, photos) {
    this.setState({ loading: false, searchQuery, photos, chosenPhotoIndex: 0 })
  }

  onNavigateLeft () {
    if (this.state.chosenPhotoIndex > 0) {
      this.setPhoto(this.state.chosenPhotoIndex - 1)
    }
  }

  onNavigateRight () {
    if (this.state.chosenPhotoIndex < this.state.photos.length - 1) {
      this.setPhoto(this.state.chosenPhotoIndex + 1)
    }
  }

  setPhoto (chosenPhotoIndex) {
    this.setState({ chosenPhotoIndex })
  }

  getPhoto (photoIndex) {
    const { photos } = this.state
    if ((photoIndex < 0) || (photoIndex >= photos.length)) {
      return null
    } else {
      return photos[photoIndex]
    }
  }

  render () {
    const { photos, chosenPhotoIndex } = this.state
    let loadingMarkup = null

    if (this.state.loading) {
      loadingMarkup = (
        <div>
          <img className='loading-gif' src='img/loading.gif' />
        </div>
      )
    }

    return (
      <div className='flickr-search'>
        <div className='stage'>
          <Header initialQuery={this.state.searchQuery} value={this.state.searchQuery} onQuerySent={this.onQuerySent} onResultsReceived={this.onResultsReceived} />
          <ChosenPhoto photo={this.getPhoto(chosenPhotoIndex)} onNavigateLeft={this.onNavigateLeft} onNavigateRight={this.onNavigateRight} />
          {loadingMarkup}
        </div>
        <Slideshow className='thumbnails' photos={photos} onPhotoClick={this.setPhoto} chosenPhotoIndex={chosenPhotoIndex} />
      </div>
    )
  }
}

FlickrSearch.propTypes = {
  initialQuery: string
}

export default FlickrSearch
