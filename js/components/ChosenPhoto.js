import React from 'react'
import { object, func } from 'prop-types'
import { buildPhotoUrl } from '../helpers'

class Header extends React.Component {
  render () {
    const { photo, onNavigateLeft, onNavigateRight } = this.props
    if (!photo) {
      return null
    } else {
      return (
        <div className='chosen-photo-cover'>
          <div className='chosen-photo-container'>
            <div className='arrow left-arrow' onClick={onNavigateLeft} />
            <div className='arrow right-arrow' onClick={onNavigateRight} />
            <div className='chosen-photo' style={{backgroundImage: `url(${buildPhotoUrl(photo)})`}} title={photo.title} />
          </div>
        </div>
      )
    }
  }
}

Header.propTypes = {
  photo: object,
  onNavigateLeft: func.isRequired,
  onNavigateRight: func.isRequired
}

export default Header
