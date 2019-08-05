// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from 'react'
import { mount, shallow } from 'enzyme';

import App from './App';


const app = shallow(<App />);

// Product recall tests
import ProductRecall from './Components/ProductRecall';

const productRecall = shallow(<ProductRecall />);
it('renders correctly', () => {
  expect(app).toMatchSnapshot();
})

it('initializes product recall with an empty JSON', () => {
  expect(productRecall.state().values).toEqual({});
})

it('submits the product recall form to state', () => {
  const wrapper = mount(<ProductRecall />)
  wrapper.find('.btn-submit').last().simulate('click');
  wrapper.update()
  console.log('LOG',wrapper.state());
  expect(wrapper.state().isSubmitted).toEqual(true);
})
