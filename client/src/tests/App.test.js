import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from '../containers/App';

describe('<App />', () => {
  const wrapper = mount(<App />)

  it('renders properly', () => {
    expect(wrapper.length).toBe(1);
  })

})
