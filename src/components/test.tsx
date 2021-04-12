import { node, oneOf, shape, string, bool } from 'prop-types';
import { HTMLAttributes } from 'react';

type A = { a: string };
type B = { b: boolean };

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: string;
  title: string;
  foo?: A | B;
}

const Test = ({ children, title, foo, ...rest }: Props) => (
  <div {...rest}>
    <h2>{title}</h2>
    {children}
  </div>
);

Test.displayName = 'Test';

// Test.propTypes = {
//   children: node.isRequired,
//   title: string.isRequired,
//   foo: oneOf([shape({ a: string }), shape({ b: bool })]),
// };

export { Test };
