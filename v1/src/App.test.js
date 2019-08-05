// import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

import React from 'react'
import { mount, shallow } from 'enzyme';

import App from './App';


const app = shallow(<App />);
// it('App renders correctly', () => {
//   // expect(app.state().values).toEqual({});
//   const wrapper = app;
//   const instance = wrapper.instance();
//   expect(instance).toEqual(null);
// })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Product recall tests
// import ProductRecall from './Components/ProductRecall';
//
// const productRecall = shallow(<ProductRecall />);

//
// it('initializes product recall with an empty JSON', () => {
//   expect(productRecall.state().values).toEqual({});
// })
//
// it('submits the product recall form to state', () => {
//   const wrapper = mount(<ProductRecall />)
//   wrapper.find('.btn-submit').last().simulate('click');
//   wrapper.update()
//   console.log('LOG',wrapper.state());
//   expect(wrapper.state().isSubmitted).toEqual(true);
// })
