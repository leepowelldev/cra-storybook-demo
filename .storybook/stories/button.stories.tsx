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
};

const Button = (props: Props) => {
  return <Component {...props}>{JSON.stringify(props)}</Component>;
};

Button.args = { children: 'Click me!' };

Button.argTypes = {
  children: {
    control: {
      type: 'text',
    },
  },
  icon: {
    control: {
      type: 'select',
      options: { none: undefined, ...icons },
    },
  },
};

export default _default;
export { Button };
