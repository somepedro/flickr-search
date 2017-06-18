/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Thumbnail from './Thumbnail'
import samplePhotos from '../../data/sample_photos'

test('Thumbnail snapshot test', () => {
  const component = shallow(<Thumbnail photo={samplePhotos[0]} />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
