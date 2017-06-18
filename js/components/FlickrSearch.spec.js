/* global test, expect */
import React from 'react'
import { shallow, mount } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import { PHOTOS_PER_PAGE } from '../constants'
import FlickrSearch from './FlickrSearch'
import Thumbnail from './Thumbnail'

test('FlickrSearch snapshot test', () => {
  const component = shallow(<FlickrSearch />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})

test('FlickrSearch should start with no thumbnails', () => {
  const component = shallow(<FlickrSearch />)
  expect(component.find(Thumbnail).length).toEqual(0)
})

test('FlickrSearch should render correct amount of thumbnails based on search', () => {
  const searchWord = 'cars'
  const component = mount(<FlickrSearch initialQuery={searchWord} />)
  setTimeout(() => {
    expect(component.find(Thumbnail).length).toEqual(PHOTOS_PER_PAGE)
  }, 1000)
})
