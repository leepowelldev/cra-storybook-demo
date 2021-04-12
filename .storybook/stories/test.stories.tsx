import { Test as Component } from '../../src/components/Test';
import { Meta } from '@storybook/react';

const _default: Meta = {
  title: 'Test',
  component: Component,
  argTypes: {
    children: {
      control: null,
    },
  },
};

const Test = (props) => <Component {...props}>{false}</Component>;

export default _default;
export { Test };
