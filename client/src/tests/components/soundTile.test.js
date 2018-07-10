import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import SoundTile from '../../components/SoundTile';

describe('<SoundTile />', () => {
  const wrapper = mount(<SoundTile />)

  it('renders properly', () => {
    expect(wrapper.length).toBe(1);
  })

})
