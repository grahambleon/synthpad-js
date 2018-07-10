import React from 'react';
import ReactDOM from 'react-dom';
import SoundTile from '../../components/SoundTile';

describe('<SoundTile />', () => {
  const wrapper = mount(<SoundTile />)

  it('renders properly', () => {
    expect(wrapper.length).toBe(1);
  })

})
