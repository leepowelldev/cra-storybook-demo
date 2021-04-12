import React from 'react';
import {
  Button as Component,
  icons,
  Props,
} from '../../src/components/button-complex';
import { Meta } from '@storybook/react';

const _default: Meta = {
  title: 'Button',
  component: Component,
  argTypes: {
    children: {
      control: null,
    },
  },
};

const Button = ({ children, ...rest }: Props) => {
  return <Component {...rest}>Click me</Component>;
};

export default _default;
export { Button };
