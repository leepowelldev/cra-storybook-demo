import React, { useState } from 'react';
import { List as Component, ListItem } from '../../src/components/List';
import { Meta } from '@storybook/react';

const _default: Meta = {
  title: 'List',
  component: Component,
  subcomponents: { ListItem: ListItem },
};

const Items = () => (
  <>
    <ListItem>Hello</ListItem>
    <ListItem>Hello</ListItem>
    <ListItem>Hello</ListItem>
  </>
);

const List = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <Component>
        <ListItem>Hello</ListItem>
        <ListItem>Hello</ListItem>
        <div>
          <ListItem>Hello</ListItem>
        </div>
        <Component>
          {show && (
            <ListItem style={{ border: '1px solid red' }}>Hello</ListItem>
          )}
          <Items />
        </Component>
      </Component>
      <button type="button" onClick={() => setShow((x) => !x)}>
        Click
      </button>
    </>
  );
};

export default _default;
export { List };
