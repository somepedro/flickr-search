import React from 'react'
import { array, string, func, number } from 'prop-types'
import { PHOTOS_PER_PAGE } from '../constants'
import Thumbnail from './Thumbnail'

class Slideshow extends React.Component {
  constructor (props) {
    super(props)
    this.onPhotoClick = this.onPhotoClick.bind(this)
  }

  onPhotoClick (photoIndex) {
    if (this.props.onPhotoClick) {
      this.props.onPhotoClick(photoIndex)
    }
  }

  render () {
    const { photos, className, chosenPhotoIndex = 0 } = this.props
    const visiblePhotos = photos.filter((photo, index) => {
      return ((index >= chosenPhotoIndex) && (index < chosenPhotoIndex + PHOTOS_PER_PAGE))
    }).map((photo, localIndex) => {
      const photoIndex = localIndex + chosenPhotoIndex
      return (
        <div key={photo.id} onClick={() => this.onPhotoClick(photoIndex)}>
          <Thumbnail photo={photo} />
        </div>
      )
    })

    return (
      <div className={className}>
        {visiblePhotos}
      </div>
    )
  }
}

Slideshow.propTypes = {
  photos: array.isRequired,
  className: string,
  onPhotoClick: func,
  chosenPhotoIndex: number
}

export default Slideshow
