import React from 'react';
import { shallow, mount } from 'enzyme';

import GroceryList from './GroceryList';

describe('GroceryList', () => {

  it('has a clear groceries button that is disabled unless there is one or more groceries on list', () => {
    const wrapper = shallow(<GroceryList />);
    expect(wrapper.find('.clear-list-btn').prop('disabled')).toEqual(true);
  });

    it('renders the appropriate number of groceries', () => {
      const wrapper = mount(<GroceryList
        groceries={[
          {id: 1, name:"Banana"},
          {id: 2, name: "Apple"}
        ]}/>);
      expect(wrapper.find('.Grocery').length).toEqual(2);
    });


    it('should call the onClearGroceries prop when clicked', () => {
      const onClearGroceriesMock = jest.fn();
      const wrapper = mount(
        <GroceryList name="Bananas" groceries={[
          {id: 1, name:"Banana"},
          {id: 2, name: "Apple"}
        ]} onClearGroceries={onClearGroceriesMock}/>
      );
      wrapper.find('.clear-list-btn').simulate('click');
      expect(onClearGroceriesMock).toBeCalled();
    });
});
