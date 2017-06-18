/* global test, expect */
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import ChosenPhoto from './ChosenPhoto'

test('ChosenPhoto snapshot test', () => {
  const component = shallow(<ChosenPhoto onNavigateLeft={() => {}} onNavigateRight={() => {}} />)
  const tree = shallowToJson(component)
  expect(tree).toMatchSnapshot()
})
