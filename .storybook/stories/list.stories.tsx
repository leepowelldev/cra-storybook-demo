import React, { useState } from 'react';
import { List as Component, backgrounds } from '../../src/components/List';
import { Meta } from '@storybook/react';

const _default: Meta = {
  title: 'List',
  component: Component,
  subcomponents: { 'List.Item': Component.Item },
};

// const Items = [
//   <ListItem key="1">Hello</ListItem>,
//   <ListItem key="2">Hello</ListItem>,
//   <ListItem key="3">Hello</ListItem>,
// ];

// const List = () => {
//   const [show, setShow] = useState(true);
//   return (
//     <>
//       <Component>
//         <ListItem>Hello</ListItem>
//         <ListItem>Hello</ListItem>
//         <ListItem>Hello</ListItem>
//         <ListItem>
//           <Component>
//             {show && (
//               <ListItem style={{ border: '1px solid red' }}>Hello</ListItem>
//             )}
//             {Items}
//           </Component>
//         </ListItem>
//       </Component>
//       <button type="button" onClick={() => setShow((x) => !x)}>
//         Click
//       </button>
//     </>
//   );
// };

const List = (props) => (
  <Component {...props}>
    <Component.Item background={backgrounds.blue}>Hello</Component.Item>
    <Component.Item>Hello</Component.Item>
    <Component.Item>Hello</Component.Item>
  </Component>
);

List.argTypes = {
  children: {
    control: null,
    // type: { required: true }
  },
};

export default _default;
export { List };
