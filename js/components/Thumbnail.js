import React from 'react'
import { object } from 'prop-types'
import { buildPhotoUrl } from '../helpers'

class Thumbnail extends React.Component {
  render () {
    const { photo } = this.props
    return (
      <div className='thumbnail-frame' key={photo.id}>
        <img className='thumbnail' src={buildPhotoUrl(photo)} title={photo.title} />
      </div>
    )
  }
}

Thumbnail.propTypes = {
  photo: object.isRequired
}

export default Thumbnail
