import React from 'react';
import { shallow } from 'enzyme';
import Hello from './src/Hello';

test('If no name parameter it should greet World', () => {
  const hello = shallow(<Hello />);
  expect(hello.text()).toEqual('Hello World');
});

test('If name parameter it should greet the name', () => {
  const hello = shallow(<Hello name='React' />);
  expect(hello.text()).toEqual('Hello React');
});
