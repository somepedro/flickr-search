/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { PHOTOS_PER_PAGE } from '../constants'
import Slideshow from './FlickrSearch'
import Thumbnail from './Thumbnail'
import samplePhotos from '../../data/sample_photos'

test('Slideshow snapshot test', () => {
  const component = shallow(<Slideshow />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('Slideshow with thumbnails', () => {
  const component = shallow(<Slideshow photos={samplePhotos} />)
  setTimeout(() => {
    expect(component.find(Thumbnail).length).toEqual(PHOTOS_PER_PAGE)
  }, 1000)
})
